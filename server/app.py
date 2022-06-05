import time
from flask_cors import CORS  # comment this on deployment
from dotenv import load_dotenv
import os
from flask import Flask, jsonify, send_from_directory, request
import pymongo
from functions import *
from pprint import pprint

load_dotenv()

mode = os.environ.get('MODE')
mongo_url = os.environ.get('MONGODB_URL')

client = pymongo.MongoClient(mongo_url)
posts_db = client['nt_data']
collection = posts_db['stocks']

signals_names_dict = {
    'RSI': rsi_calc,
    'signal 2': rsi_calc,
    'signal 3': rsi_calc,
    'signal 4': rsi_calc,
    'signal 5': rsi_calc,
    'signal 6': rsi_calc,
    'signal 7': rsi_calc,
}
# signals_names_list = [
#     'RSI',
#     'signal 2',
#     'signal 3',
#     'signal 4',
#     'signal 5',
#     'signal 6',
#     'signal 7',
# ]

strategies_names_list = [
    'strategy 1',
    'strategy 2',
    'strategy 3',
    'strategy 4',
]

stocks_names_list = [
    'AAPL',
    'AMZN',
    'DIA',
    'FB',
    'GLD',
    'GOOG',
    'GOOGL',
    'GOVT',
    'IAU',
    'IEF',
    'IGSB',
    'IVV',
    'LQD',
    'MSFT',
    'NFLX',
    'QQQ',
    'SHY',
    'SPY',
    'TLT',
    'TSLA',
    'VCIT',
    'VCSH',
    'VIXY',
    'VOO',
]

app = Flask(__name__, static_url_path='', static_folder='../client/build')
app.secret_key = os.environ.get('SECRET_KEY')
if mode == 'build':
    print(f'inside {mode} mode')
    CORS(app)  # comment this on deployment


@app.route('/')
def index_func():
    return send_from_directory(app.static_folder, 'index.html')
    # return 'hello'


@app.route('/get_stock')
def get_stock_func():
    """
    item: {
        time: index,
        stock_name_1: {
            adj: _, open: _, high: _, low: _, close: _, volume: _}
        },
        stock_name_2: { ... },
        stock_name_3: { ... },
        stock_name_4: { ... },
    }
    """
    stock_name = request.args['stock']
    # print(f'stock name: {stock_name}')
    all_files = list(collection.find({}, {'time': 1, stock_name: 1, '_id': 0}))
    file_to_send = transform_stock_file(all_files, stock_name)
    return jsonify(file_to_send)


@app.route('/get_signal')
def get_signal_func():
    """
    item: {
        time: index,
        stock_name_1: {
            adj: _, open: _, high: _, low: _, close: _, volume: _}
        },
        stock_name_2: { ... },
        stock_name_3: { ... },
        stock_name_4: { ... },
    }
    """
    stock_name = request.args['stock']
    signal_name = request.args['signal']

    # get the stock
    all_files = list(collection.find({}, {'time': 1, stock_name: 1, '_id': 0}))
    # stock_data = {'time': [], 'close': [], 'high': [], 'low': [], 'open': [], 'adj': []}
    stock_data = transform_stock_file(all_files, stock_name)

    # get the signal
    list_of_nums = [float(item) for item in stock_data['open']]
    signal_list = signals_names_dict[signal_name](list_of_nums)
    signal_data = {'time': stock_data['time'], signal_name: signal_list}
    return jsonify(signal_data)


@app.route('/get_signals_names')
def get_signals_names_func():
    return jsonify(list(signals_names_dict.keys()))


@app.route('/get_strategies_names')
def get_strategies_names_func():
    return jsonify(strategies_names_list)


@app.route('/get_stocks_names')
def get_stocks_names_func():
    return jsonify(stocks_names_list)


if __name__ == '__main__':
    app.run()

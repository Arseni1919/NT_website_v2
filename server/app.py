import time
from flask_cors import CORS  # comment this on deployment
from dotenv import load_dotenv
import os
from flask import Flask, jsonify, send_from_directory
load_dotenv()

mode = os.environ.get('MODE')


signals_names_list = [
    'signal 1',
    'signal 2',
    'signal 3',
    'signal 4',
]

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
    print(mode)
    CORS(app)  # comment this on deployment


@app.route('/', defaults={'path': ''})
def index_func(path):
    return send_from_directory(app.static_folder, 'index.html')
    # return 'hello'


@app.route('/get_signals_names')
def get_signals_names_func():
    return jsonify(signals_names_list)


@app.route('/get_strategies_names')
def get_strategies_names_func():
    return jsonify(strategies_names_list)


@app.route('/get_stocks_names')
def get_stocks_names_func():
    return jsonify(stocks_names_list)


if __name__ == '__main__':
    app.run()

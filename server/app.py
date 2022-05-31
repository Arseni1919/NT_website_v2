from flask import Flask, jsonify
from flask_cors import CORS  # comment this on deployment

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

app = Flask(__name__)
CORS(app)  # comment this on deployment


@app.route('/get_stocks_names')
def get_stocks_names_func():
    return jsonify(stocks_names_list)


@app.route('/')
def index():
    return 'Hello'


if __name__ == '__main__':
    app.run()
import json
import pymongo
from dotenv import load_dotenv
import os

load_dotenv()
mongo_url = os.environ.get('MONGODB_URL')
client = pymongo.MongoClient(mongo_url)

posts_db = client['nt_data']
collection = posts_db['stocks']
print(f'count: {collection.count_documents({})}')

prefix_list = ['Adj_', 'Close_', 'High_', 'Low_', 'Open_', 'Volume_']
prefix_dict = {
    'Adj_': 'adj',
    'Close_': 'close',
    'High_': 'high',
    'Low_': 'low',
    'Open_': 'open',
    'Volume_': 'volume'
}
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

all_files = collection.find({}, {'time': 1, 'AAPL': 1, '_id': 0})
result_list = list(all_files)
print(result_list)

print('===')


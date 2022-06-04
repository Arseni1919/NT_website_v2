

def transform_stock_file(all_files, stock_name):
    return_value = {'time': [], 'close': [], 'high': [], 'low': [], 'open': [], 'adj': []}
    for file_item in all_files:
        for key in return_value:
            if key == 'time':
                return_value[key].append(file_item[key])
            else:
                return_value[key].append(file_item[stock_name][key])
    return return_value

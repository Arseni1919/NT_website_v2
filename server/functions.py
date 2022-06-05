from datetime import datetime


def transform_stock_file(all_files, stock_name):
    return_value = {'time': [], 'close': [], 'high': [], 'low': [], 'open': [], 'adj': []}
    for file_item in all_files:
        for key in return_value:
            if key == 'time':
                time_value = file_item[key]
                date_time_obj = datetime.strptime(time_value, '%d/%m/%Y %H:%M')
                final_value = date_time_obj.strftime("%Y-%m-%d %H:%M")
                return_value[key].append(final_value)
            else:
                return_value[key].append(file_item[stock_name][key])
    return return_value

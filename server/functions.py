from datetime import datetime


def transform_stock_file(all_files, stock_name):
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


def mean(sample):
    return sum(sample) / len(sample)


def rsi_calc(close, time_period=6):
    # time_period looks back period to compute gains & losses
    gain_history = []  # history of gains over look back period (0 if no gain, magnitude of gain if gain)
    loss_history = []  # history of losses over look back period (0 if no loss, magnitude of loss if loss)
    avg_gain_values = []  # track avg gains for visualization purposes
    avg_loss_values = []  # track avg losses for visualization purposes
    rsi_values = []  # track computed RSI values
    last_price = 0  # current_price - last_price > 0 => gain. current_price - last_price < 0 => loss.

    for close_price in close:
        if last_price == 0:
            last_price = close_price

        gain_history.append(max(0, close_price - last_price))
        loss_history.append(max(0, last_price - close_price))
        last_price = close_price

        if len(gain_history) > time_period:  # maximum observations is equal to lookback period
            del (gain_history[0])
            del (loss_history[0])

        avg_gain = mean(gain_history)  # average gain over lookback period
        avg_loss = mean(loss_history)  # average loss over lookback period

        avg_gain_values.append(avg_gain)
        avg_loss_values.append(avg_loss)

        rs = 0
        if avg_loss > 0:  # to avoid division by 0, which is undefined
            rs = avg_gain / avg_loss
        elif avg_loss == 0 and avg_gain > 0:
            rs = 100
        else:
            rs = 50

        rsi = 100 - (100 / (1 + rs))
        rsi_values.append(rsi)
        # print(rsi_values)
    rsi_values[:time_period] = [50] * time_period
    return rsi_values


def main():
    json_data = {'time': [1, 2, 3, 4, 5],
                 'GOOG': [10, 11, 10, 11, 10, 11, 10, 17, 18, 19, 20, 21, 22, 21, 19, 18, 17, 16, 15, 14]}

    rsi_values = rsi_calc(json_data['GOOG'])

    # creating the result dict
    keys = list(json_data.keys())
    result_dic = {keys[0]: json_data[keys[0]], 'RSI_' + keys[1]: rsi_values}

    print()


if __name__ == '__main__':
    main()

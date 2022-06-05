import pickle
import numpy

with open('../data/data_for_NN.pickle', 'rb') as f:
    data = pickle.load(f)

print()


# def get_rsi():
#     rsi_period = 14
#     series = price_df
#     chg = series.diff(1)
#     gain = chg.mask(chg < 0, 0)
#     loss = chg.mask(chg > 0, 0)
#     avg_gain = gain.ewm(com=rsi_period - 1, min_periods=rsi_period).mean()
#     avg_loss = loss.ewm(com=rsi_period - 1, min_periods=rsi_period).mean()
#     rs = abs(avg_gain / avg_loss)
#     rsi = 1 - (1 / (1 + rs))
#     return rsi
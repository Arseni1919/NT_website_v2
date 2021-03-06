import csv
import json


# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
    # create a dictionary
    data = {}

    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key
            for key, value in rows.items():
                if key in data:
                    data[key].append(value)
                else:
                    data[key] = []

            # key = rows['No']
            # data[key] = rows

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))


def main():
    # Driver Code

    # Decide the two file paths according to your
    # computer system
    csvFilePath = r'../data/new_sample.csv'
    jsonFilePath = r'../data/new_sample.json'

    # Call the make_json function
    make_json(csvFilePath, jsonFilePath)


if __name__ == '__main__':
    main()

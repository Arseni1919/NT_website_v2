// const dotenv = require('dotenv')
// dotenv.config()
// import 'dotenv/config';
// console.log(process.env.NODE_ENV)// remove this after you've confirmed it working
const string_a = process.env.NODE_ENV;
const string_b = "development";
export var path = ''
if (string_a.localeCompare(string_b) === 0) {
    path = 'http://localhost:5000'
} else {
    path = ''
}



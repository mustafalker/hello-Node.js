const url = require('url');

const address = 'http://mustafaulkerdeneme.com/apiBaseUrlNameHere?year=2024&month=nisan';

let result = url.parse(address, true);

console.log(result);

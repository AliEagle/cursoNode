const moment = require('moment');

let ahora = moment();

console.log(ahora.toString()); //Fri Jul 02 2021 09:32:21 GMT-0500
console.log(ahora.format('YYYY-MM-DD - HH:mm'));

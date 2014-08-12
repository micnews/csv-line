var csvLine = require('./csv-line')
  , toCsv1 = csvLine()
  , toCsv2 = csvLine({ separator: '*' })

console.log(toCsv1([ '"hello"', 'I am a *', 'Girfriend in a ,' ]))
console.log(toCsv2([ 'I am a *', 'Girfriend in a ,' ]))
var csvLine = require('./csv-line')
  , toCsv1 = csvLine()
  , toCsv2 = csvLine({ separator: '*' })
  , toCsv3 = csvLine({ escapeNewlines: true })

console.log(toCsv1([ '"hello"', 'I am a *', 'Girfriend in a ,', 'new\nline' ]))
console.log()
console.log(toCsv2([ 'I am a *', 'Girlfriend in a ,', 'new\nline' ]))
console.log()
console.log(toCsv3([ 'I am a *', 'Girlfriend in a ,', 'new\nline']))
var csvLine = require('./csv-line')

require('tape')(function (t) {
  t.equal(csvLine()([ 'foo', 'bar', undefined, 1 ]), 'foo,bar,,1')
  t.equal(csvLine()([ '"hello"', ',beep']), '"""hello""",",beep"')
  t.equal(csvLine({ separator: '\t'})([ 'foo', 'bar' ]), 'foo\tbar')
  t.equal(csvLine({ escapeNewlines: true })([ '\nfoo\nbar\n' ]), '\\nfoo\\nbar\\n')
  t.equal(csvLine({ escapeNewlines: true })([ 1, undefined, 2 ]), '1,,2')
  t.end()
})

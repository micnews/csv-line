var csvLine = require('./csv-line')

require('tape')(function (t) {
  t.equal(csvLine()([ 'foo', 'bar' ]), 'foo,bar')
  t.equal(csvLine()([ '"hello"', ',beep']), '"""hello""",",beep"')
  t.equal(csvLine({ separator: '\t'})([ 'foo', 'bar' ]), 'foo\tbar')
  t.equal(csvLine({ escapeNewlines: true })([ '\nfoo\nbar\n' ]), '\\nfoo\\nbar\\n')
  t.end()
})

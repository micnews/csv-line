var assert = require('assert')
  , csvLine = require('./csv-line')

assert.equal(csvLine()([ 'foo', 'bar' ]), 'foo,bar')
assert.equal(csvLine()([ '"hello"', ',beep']), '"""hello""",",beep"')
assert.equal(csvLine({ separator: '\t'})([ 'foo', 'bar' ]), 'foo\tbar')
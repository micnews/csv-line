var csvLine = require('./csv-line')

var tape = require('tape')

var examples = [
  {
    decoded: [ 'foo', 'bar', undefined, 1 ],
    encoded: 'foo,bar,,1'
  },
  {
    decoded: [ '"hello"', ',beep'],
    encoded: '"""hello""",",beep"'
  },
  {
    decoded: [ 1, undefined, 2 ],
    encoded: '1,,2'
  }
]

tape('options', function (t) {
  t.equal(csvLine({ separator: '\t'})([ 'foo', 'bar' ]), 'foo\tbar')
  t.equal(csvLine({ escapeNewlines: true })([ '\nfoo\nbar\n' ]), '\\nfoo\\nbar\\n')
  t.equal(csvLine({ escapeNewlines: true })([ 1, undefined, 2 ]), '1,,2')
  t.end()
})

tape('encode', function (t) {
  examples.forEach(function (ex) {
    t.equal(csvLine.encode(ex.decoded), ex.encoded)
  })
  t.end()
})

tape('decode', function (t) {
  examples.forEach(function (ex) {
    t.deepEqual(csvLine.decode(ex.encoded), ex.decoded)
  })
  t.end()

})

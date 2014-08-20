# csv-line[![build status](https://secure.travis-ci.org/micnews/csv-line.svg)](http://travis-ci.org/micnews/csv-line)

Create a line of escaped csv from an array

[![NPM](https://nodei.co/npm/csv-line.png?downloads&stars)](https://nodei.co/npm/csv-line/)

[![NPM](https://nodei.co/npm-dl/csv-line.png)](https://nodei.co/npm/csv-line/)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/micnews-csv-line.svg)](https://saucelabs.com/u/micnews-csv-line)

## Installation

```
npm install csv-line
```

## Browserify support

Currently only supported in browserify is `csvLine.encode`, decode _should_ work in most modern browsers, but is not working in IE8.

## Example

### Input

```javascript
var csvLine = require('./csv-line')

var encoded = csvLine.encode([ '"hello"', 'I am a *', 'Girfriend in a ,' ])

//the encoded line
console.log(encoded)

//decode it again
console.log(csvLine.decode(decoded))
```

### Output

```
"""hello""",I am a *,"Girfriend in a ,"
[ '"hello"', 'I am a *', 'Girfriend in a ,' ]
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

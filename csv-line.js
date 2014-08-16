var map = function (input, fn) {
      var result = Array(input.length)

      for(var i = 0; i < input.length; ++i) {
        result[i] = fn(input[i])
      }

      return result
    }

function createCSV (options, CSV) {
  var separator = options && options.separator ? options.separator : ','
    , escapeNewlines = options && options.escapeNewlines === true
    , regexp = new RegExp('[' + separator + '\r\n"]')
    , escape = function (cell) {

        if (typeof(cell) === 'string') {
          if (escapeNewlines) {
            cell = cell.replace(/\n/g, '\\n')
          }
          cell = regexp.test(cell) ? '"' + cell.replace(/"/g, '""') + '"' : cell
        }

        return cell
      }
    , unescape = function (cell) {
      //remove surrounding chars
      return cell.replace(/^"/, '')
        .replace(/"$/, '').replace(/""/g, '"')
    }

  function encode (array) {
    return map(array, escape).join(separator)
  }

  CSV = CSV || encode

  CSV.encode = encode
  CSV.decode = function (line) {
    return line.split(/((?:(?:"[^"]*")|[^,])*)/)
    .filter(function (e, i) {
      return i % 2
    })
    .map(function (l, i) {
      return l ? !isNaN(l) ? +l : unescape(l) : undefined
    })
  }

  CSV.buffer = false
  CSV.type = 'csv-line'

  return CSV
}

module.exports = createCSV({escapeNewlines: true}, createCSV)

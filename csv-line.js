var map = function (input, fn) {
      var result = Array(input.length)

      for(var i = 0; i < input.length; ++i) {
        result[i] = fn(input[i])
      }

      return result
    }

module.exports = function (options) {
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

  return function (array) {
    return map(array, escape).join(separator)
  }
}
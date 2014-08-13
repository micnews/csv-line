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
    return array.map(escape).join(separator)
  }
}
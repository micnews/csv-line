module.exports = function (options) {
  var separator = options && options.separator ? options.separator : ','
    , regexp = new RegExp('[' + separator + '\r\n"]')
    , escape = function (cell) {
        return regexp.test(cell) ? '"' + cell.replace(/"/g, '""') + '"' : cell
      }

  return function (array) {
    return array.map(escape).join(separator)
  }
}
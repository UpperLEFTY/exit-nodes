/**
 * @param {string} code
 * @return {boolean}
 */
const isValid = function (code) {
  code = code.replace(/<!\[CDATA\[.*?\]\]>|t/g, '-')
  let prev
  while (code !== prev) {
    prev = code
    code = code.replace(/<([A-Z]{1,9})>[^<]*<\/\1>/g, 't')
  }
  return code === 't'
}

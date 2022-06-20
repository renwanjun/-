/**
 *
 * @param {String} str
 * @returns
 */
function trim(str) {
  if (str && typeof str == "string") return str.replace(/(^\s*)|(\s*)$/g, "");
}

/*
 * Build a user only response.
 * @param {string} text - The text to respond with.
 * @return {object}
*/
exports.ephemeral = function (text) {
  return {
    response_type: 'ephemeral',
    text: text
  }
}

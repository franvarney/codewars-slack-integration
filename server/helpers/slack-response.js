const Config = require('../../config')

function formatQuestion(text) {
  var out = {
    fallback: text.description,
    text: text.description,
    title: text.name,
    fields: [
      {
        title: 'Rank',
        value: `${Math.abs(text.rank)} kyu`,
        short: true
      },
      {
        title: 'Tags',
        value: text.tags.slice(0, 2).toString().replace(',', ', '),
        short: true
      }
    ],
    mrkdwn_in: ['text', 'fallback']
  }

  if (Config.codewars.submissions) {
    out.fields.push({
      title: 'Make an attempt (at least once)',
      value: '`/codewars attempt <' + text.slug + '> <(your code wrapped in parentheses>`'
    })

    out.fields.push({
      title: 'Submit (after attempt)',
        value: '`/codewars submit <' + text.slug + '> <(your code wrapped in parentheses>`'
    })
  }

  return out
}

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

/*
 * Build a channel only response.
 * @return {object} body - The question from codewars.com.
*/
exports.channel = function (text) {
  text = JSON.parse(text)

  if (text && text.description) text = formatQuestion(text)

  return {
    response_type: 'in_channel',
    text: 'Codewars.com Question:',
    attachments: [text]
  }
}

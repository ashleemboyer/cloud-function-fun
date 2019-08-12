const htmlToImage = require('html-to-image')

exports.handler = function(event, context, callback) {
  const json = JSON.stringify(event.queryStringParameters)
  callback(null, { body: json, statusCode: 200 })
}

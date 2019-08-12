const htmlToImage = require('html-to-image')

exports.handler = function(event, context, callback) {
  const json = JSON.stringify(event.queryStringParameters)
  console.log(json.container, !!json.container)

  if (!!json.container) {
    callback(null, {
      body: {
        container: decodeURIComponent(json.container),
      },
      statusCode: 200,
    })
  } else {
    callback(null, { body: 'Hmmmmmmm', statusCode: 200 })
  }
}

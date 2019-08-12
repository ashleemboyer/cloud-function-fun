const htmlToImage = require('html-to-image')

exports.handler = function(event, context, callback) {
  const params = event.queryStringParameters

  if (params.container) {
    htmlToImage.toPng(params.container).then(dataUrl => {
      callback(null, {
        body: {
          url: dataUrl,
        },
        statusCode: 200,
      })
    })
  } else {
    callback(null, { body: 'Hmmmmmmm', statusCode: 200 })
  }
}

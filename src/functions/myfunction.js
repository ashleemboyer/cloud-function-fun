var request = require('request')

exports.handler = function(event, context, callback) {
  const data = {
    html: decodeURIComponent(event.queryStringParameters.container),
  }

  console.log('the html is apparently:', data.html)

  request
    .post({ form: data, url: 'https://hcti.io/v1/image' })
    .auth(
      'e57af5e7-dbca-444f-bb62-a9fe06d4805f',
      'f8387fc1-7a56-4c5a-ab11-015ea1a902f6'
    )
    .on('data', function(dataaa) {
      callback(null, { body: JSON.parse(dataaa).url, statusCode: 200 })
    })
}

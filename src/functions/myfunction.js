var request = require('request')

exports.handler = function(event, context, callback) {
  const data = {
    // css:
    //   ".box { border: 4px solid #03B875; padding: 20px; font-family: 'Roboto'; }",
    // google_fonts: 'Roboto',
    html: '<p>Hello, world!</p>',
  }

  request
    .post({ form: data, url: 'https://hcti.io/v1/image' })
    .auth(
      'e57af5e7-dbca-444f-bb62-a9fe06d4805f',
      'f8387fc1-7a56-4c5a-ab11-015ea1a902f6'
    )
    .on('data', function(data) {
      callback(null, {
        body: JSON.parse(data),
        statusCode: 200,
      })
    })
}

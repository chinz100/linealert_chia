var requestCloudflare = require('request-cloudflare');
 

requestCloudflare.request({
    method: 'GET',
    url:'http://website.com/image',
    encoding: null, //=>utf8
    challengesToSolve: 3, // optional, if CF returns challenge after challenge, how many to solve before failing
    followAllRedirects: true, // mandatory for successful challenge solution
  }, function(err, response, body) {
    //body is now a buffer object instead of a string
});
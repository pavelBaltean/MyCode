const request = require('request');
let user;


//start req
function reqOnLink(url,res){
  request.get({url : url,time : true},function(err, response){
    let data=[url,response.elapsedTime,response.statusCode,response.statusMessage];
    res(data);
  });
}


reqOnLink('https://nodejs.dev/making-http-requests-with-nodejs',function(location){
  //console.log(location);
 user=[url,resElapsedTime,resStatusCode,resStatusMessage];

});

console.log(user);

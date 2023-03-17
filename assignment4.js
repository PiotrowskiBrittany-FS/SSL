var http = require('http');
// changed from htt to http

var myname = function(){
  // functon was changed to function - typo without the i
  console.log("Here is my IP address");
}

async function callHttpbin() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      var myips = result.origin; //declared variable
      resolve(myips); //changed to hold myips to resolve the promise
     });
     }
    );
  });
  return promise;
  // changed from awaiting promise to returning a promise from callHttpbin
}

async function executeAsyncTask(){ //changed to an async function
  const valueA = await callHttpbin(); //made async call
  const valueB = await myname(); // awaits name
  console.log(valueB(), " ", valueA);
  //changed from valueB+" "+valueA
}

executeAsyncTask();
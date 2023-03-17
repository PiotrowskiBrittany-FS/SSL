var http = require('http');

var myname = function(){
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
      myips = result.origin;
      resolve(myips);
     });
     }
    );
  });
  return promise;
}

async function executeAsyncTask(){
  const valueA = await callHttpbin();
  const valueB = myname();
  console.log(valueB+" "+valueA);
}

executeAsyncTask();


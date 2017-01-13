var vkApi = require('./vkApi');

//Lets require/import the HTTP module
var http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: https://chernika.herokuapp.com/:%s");
});

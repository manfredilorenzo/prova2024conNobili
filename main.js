let http = require ("http");
//require uguale a import
http.createServer(function(request,response) {
    response.writeHead(200, {'Content-Type':"text/plane"});
    response.end("Hello world \n");
}
).listen(8081);
console.log("Server running on port 8081");

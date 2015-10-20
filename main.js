var http=require("http");
var fs=require("fs");
function send404ServerPage(response){
	response.writeHead(404,{"Content-Type":"text/plain"});
	response.write("404 page not found error");
	response.end();
}
http.createServer(function(request,response){
	if (request.method=='GET' && request.url=='/')
	{
		response.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream("./ce.html").pipe(response);
		
	}
	else{
		send404ServerPage(response);
	}
}).listen(8888);
console.log("server running at http://127.0.0.1:8888");
import http from 'http';
import { clearScreenDown } from 'readline';

const server = http.createServer((request,response) =>{
    response.writeHead(200, {"content-type": "text/html"});
    response.end("Hello world");
});

server.listen(8000, ()=> {
    console.log("Server is running at port 8000")
});
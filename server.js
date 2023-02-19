const http = require("http");

const port = 8107

http.createServer((request , responce)=>{
    responce.writeHead(200,{"Content-Type":"text/html"});
    responce.write(`<h1> hello this message genrated by server aka Kunal Chauhan</h1>`);
    responce.end();
})
.listen(port,()=>{
    console.log(`the server is now working and is live on ${port}`);
});
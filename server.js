const http = require("http");

const port = 8107
const todo = ["study Web-Dev" , "Study python" , "Study Java"]

http.createServer((request, responce)=>{
    const{method,url} = request;
    console.log(method,url)
    if(url === "/todos"){
        if(method === "GET"){
            responce.writeHead(200 , {"Content-Type" : "text/html"});
            responce.write(`<h2>${todo.toString()}</h2>`);
        } else if(method === "POST"){
            let body = "";
            request.on('error',(err) =>{
                console.log(err)
            }).on('data',(chunk) => {
                body += chunk;

            }).on('end',() => {
                body = JSON.parse(body);
                console.log(body)
            })
        }
        else{
            responce.writeHead(501);
        }
    } else {
        responce.writeHead(404);
    }
    responce.end();
})
.listen(port,()=>{
    console.log(`the server is now working and is live on ${port}`);
});
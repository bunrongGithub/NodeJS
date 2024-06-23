const { log } = require("console");
const http = require("http")
const server = http.createServer((req , res) =>{
    if(req.url ==='/'){
        console.log(req);
        res.write("Welcome home page");
        res.end();
    }
    if(req.url ==="/about"){
        res.end("About page")
    }
})
server.listen(5000)
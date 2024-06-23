const http = require("http");
const {readFileSync} = require("fs")

// get all files
const homePage = readFileSync("nav/index.html")




const server = http.createServer( (req , res) => {

    if(req.url === '/'){
        res.writeHead(200 , {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }else{
        res.end("opp!")
    }
})



server.listen(5000)
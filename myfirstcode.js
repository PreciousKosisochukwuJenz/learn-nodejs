const http = require("http")
const port = 8000
const hostname = "localhost"

const server = http.createServer((request, response) => {

    response.writeHead(200,{"Content-Type":"text/html"})
    response.write("Hello World!")
    response.end();
})
server.listen(port,hostname,()=>{
    console.log(`server connection created and listening at http://${hostname}:${port}`)
})

/* This sh!t is getting interesting, lol */
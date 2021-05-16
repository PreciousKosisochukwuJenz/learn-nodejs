const http = require("http")
const fs = require("fs")
const port = 8080
const hostname = "localhost"

// create server
const server = http.createServer((request,response ) => {
    response.writeHead(200,{"Content-Type":"text/html"});

    if(request.url == "/Read"){
        fs.writeFile("index.txt","I read from a file",() => {
            console.log("File written successfully")
        })
    
        fs.readFile("index.txt",function(error,data){
            response.write(data)
            return response.end()
        })
    }
    else{
        response.write("Hello")
        return response.end()
    }
  
})

// listen to the specified port
server.listen(port,hostname,() => {
    console.log(`Connected to server...`)
})
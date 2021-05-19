const url = require("url")

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var parsedUrl = url.parse(adr,true)
    
    console.log(parsedUrl.host)
    console.log(parsedUrl.hostname)
    console.log(parsedUrl.pathname)
    console.log(parsedUrl.query.month)
    console.log(parsedUrl.query.year)

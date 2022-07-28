const http = require('http')
const stats = require('./pcRamUsage.js')
const port = 3000;
const host = "http://localhost"

http.createServer((req,res)=> {
    let url = req.url

    if(url==='/status' ){
    res.end(JSON.stringify(stats, null,2))
    }
    else{
        res.end(`<h1>teste 123</h1>`)
    }

}).listen(3000, () => console.log(`server is running in ${host}:${port}, ${stats}` ))
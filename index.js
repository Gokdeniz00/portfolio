const express =require('express');
const app= express();
const fs = require('fs');

app.get("/.", (req,res)=>{
    if(req.path.match("/")){
        data=fs.readFile("/contents/index.htm")
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.send(data)
        res.end()
    }else if(req.path.match("/certs")){
        data=fs.readFile("/contents/certs.htm");
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.send(data)
        res.end()
    }else{
        data=fs.readFile("/contents/404.html");
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.send(data)
        res.end()
    }
})

const express =require('express');
const app= express();
const path =require('path');

app.get("/", (req,res)=>{
        res.sendFile(path.join(__dirname,"contents","index.htm"));
})
app.get("/certs", (req,res)=>{
    res.sendFile(path.join(__dirname,"contents","certs.htm"));
})
app.use("/media",express.static(path.join(__dirname,"media")));
app.use((req,res)=>{
    if (req.url!="/"||req.url!="/certs"||!(req.url.match("/media/.*"))){
        res.status(404).sendFile(path.join(__dirname,"contents","404.htm"))
    }
})

console.log("running on http://127.0.0.1:8080 ")
app.listen("8080")

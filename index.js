const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.send("we love you pussy dick boy ");
})

app.listen(4500,()=>{
    console.log("we start ")
})
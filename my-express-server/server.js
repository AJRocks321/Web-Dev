const express = require("express");
const app=express();
app.get("/",function(req, res){
    res.send("Hello")
});

app.get("/about",function(req,res){
    res.send("This website is owned by Ajay Mehra")
})
app.listen(3000,function(){
    console.log("server started on 3000");
})

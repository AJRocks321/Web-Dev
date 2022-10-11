const express=require("express");
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var n1=Number(req.body.num1)
    var n2=Number(req.body.num2)
    var n3=n1+n2
    res.send("<h1>Thanks for adding "+n1+" + "+n2+" which gives "+n3+".<h1>");
    
});
app.listen(3000,console.log("server started"))


app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/bmicalculator",function(req,res){
    console.log(req.body)
    var h=parseFloat(req.body.h);
    var w=parseFloat(req.body.w);
    var bmi=w/(h*h);
    res.send("Your BMI is "+bmi);
})
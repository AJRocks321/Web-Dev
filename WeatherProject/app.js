const express= require("express")
const app=express()
const https=require("https")
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    const lat=req.body.lat
    const long=req.body.long
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&lat="+lat+"&lon="+long+"&appid=ef71bc98f2fcdc98b4d55c9f2915a76a"
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const icon="http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
            const temp=weatherData.main.temp;
            //JSON.stringify
            res.write("<p>The weather is currently " + weatherData.weather[0].description+"<p>");
            res.write("<h1>The temperature is "+temp+" degree Celcius</h1>");
            res.write("<img alt='img' src=" + icon + ">")
            res.send();
        })

    })
})

app.listen(3000,function(){
    console.log("server started")
})
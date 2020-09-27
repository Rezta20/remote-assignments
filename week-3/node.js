const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello, Could you see me?</h1>");
});

app.get("/getData",(req, res) =>{
    res.send("Lack of Parameter");
});

// webClient webClient = new webClient();
// webClient.QueryString.Add('number', 'xyz');
// webClient.QueryString.Add('number', '5');
// string result = webClient.DownloadString("https//theurl.com");

app.get("/getData?number=xyz",(req,res) =>{
    res.send("Wrong Parameter");
});

app.get("`/getData?number=${positiveInteger}`",(req,res) =>{
    let positiveInteger;
    let response; 
    for (let i=0; i< positiveInteger.length; i++){
        response += positiveInteger[i];
    }
    res.send(response);
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
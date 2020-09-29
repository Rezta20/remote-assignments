const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello, Could you see me?</h1>"); 
});

app.get("/getData",(req,res) =>{ 
     // when req.query = {}; req.query = key=value;
     if(Object.keys(req.query).length == 0){
         res.send("Lack of Parameter")
     }
     // value ->'xyz'
     else if(Object.values(req.query) == 'xyz'){
         res.send("Wrong Parameter");
     }
     // req.query -> not a number
     // req.query -> not positive integer -> 0 or negtive number   
     else if(isNaN(req.query.number) || parseInt(req.query.number) <= 0){
         res.send('Wrong Parameter');    
     }
     // req.qurey.value -> positive integer
     // each plus together
     else(Object.values(req.query.number) == parseInt(req.query.number) >0)
        total = 0;
        for(let i=1; i<=req.query.number; i++){
          total = total+i;
        }
        res.send(total.toString());    
     
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
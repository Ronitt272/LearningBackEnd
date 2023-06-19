const express = require('express');
const app = express();


const port = 3000;

app.get("/", (req, res)=>{ // endpoints
    //res.send("index"); //res.send("") only returns a string
    //res.sendFile(__dirname+"/index.html");  //__dirname is a global property, it handles a working directory 
    res.send(`Hello World !`);
});

//The arrow function used above is called a callback function because it is called by the framework, when a certain condition is met.

app.post("/createuser", (req, res)=>{
    console.log(req);
    res.send("User created");
})

app.listen(port, ()=>{
    console.log(`server started running at http://localhost:${port}`);
});
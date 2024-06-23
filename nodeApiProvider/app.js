const express = require("express");
const app = express();
const connect = require("./config/database");
connect.connect((err)=>{
    if(err) throw err;
    console.log("connect!");
})

const port = 3000;
app.listen(port , ()=>{
    console.log(`Server start on port:${port}`);
})
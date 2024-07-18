const path=require('path');
const express=require('express');
const app=express();

//finding static website
const static_path=path.join(__dirname,"../public");//builtin middleware


app.use(express.static(static_path));

app.listen(8000,()=>{
    console.log("listening ");
});
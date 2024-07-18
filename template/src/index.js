const express=require('express');
const app=express();
const port=9000;
app.set("view engine","hbs");
app.get("/", (req,res)=>{
    res.render('index.hbs');

});
app.listen(port,()=>{
    console.log("listen");
});
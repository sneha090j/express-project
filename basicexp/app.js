let express=require('express');
const app=express();
// console.log(app);
// app.get(route,callback)
app.get("/",(req,res)=>{
res.send("hello world from the express");
});
app.get("/about",(req,res)=>{
    res.send("hello world from the about page");
    });
app.listen(8000,()=>{
    console.log("listening");
})
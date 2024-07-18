let express=require('express');
let app=express();
app.get("/",(req,res)=>{
    res.send("welcome to home page");
});
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>welcome to about page</h1>");
});
app.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"sneha"
    }]);
});
app.get("/",(req,res)=>{
    res.send("welcome to home page");
});
app.listen(8000,()=>{
    console.log("listen");
})
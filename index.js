const express=require("express");
const app=express();
const PORT=8000;
app.get('/',(req,res)=>{
    res.send("Hello Friend");
})
app.listen(PORT,()=>{
    console.log(`My server is running on PORT${PORT}`);
})
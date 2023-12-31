const express=require("express");
const app=express();
// app.use( function(req,res,next){
//     console.log("hello from middleware");
//     next();
// })
app.set("view engine","ejs");
app.use(express.static('./public'));
app.get('/',function (req,res){
    res.render("index"); 
});
app.get('/about',function (req,res){
    res.render("about", {name:"tanuj"}); 
});
app.get('/error',function (req,res,next){
    throw Error("something went weong");
});
// app.get('/profile/:username',function (req,res){
//     res.send(`hello from ${req.params.username}`);
// });
app.use(
    function errorHandler (err, req, res, next) {
        if (res.headersSent) {
          return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
      }
)
app.listen(3000);
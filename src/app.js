const express = require("express");
const path = require("path")
const app = express();
const portnum = process.env.PORT || 8000;
const hbs = require("hbs") ; 

//paths 
const staticPath = path.join(__dirname, "../public");
const viewPath =  path.join(__dirname, "../templates/views"); 
const partialPath =  path.join(__dirname, "../templates/partials"); 

//for static hosting 
app.use(express.static(staticPath));

//for dynamic hosting 
app.set("view engine" , "hbs") ;
app.set("views" , viewPath) ; 
hbs.registerPartials(partialPath) ; 

app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("error" , {
        errorMsg : "Oops page not found!" ,
    });
});



//routing 
app.get("", (req, res) => {
    res.send("welcome to whether today app");
});

app.get("", (req, res) => {
    res.send("welcome to whether today app");
});

app.get("/weather", (req, res) => {
    res.send("here is your todays whether report :");
});

app.get("/about", (req, res) => {
    res.send("this app is made to know about whether of different locations");
});

app.get("*", (req, res) => {
    res.send("Error 404 ! Page not found");
});

app.listen(8000, () => {
    console.log(`listening to port number ${portnum}`);
})


const express= require("express");
const app = express();
const Blog= require("./blog");
app.listen(8080);
const mongoose= require("mongoose");
const bodyParser= require("body-parser");
//connect to mongo db
const dbURI="mongodb+srv://user2:newpassword@cluster0.yl6hm.mongodb.net/node-tuts?retryWrites=true&w=majority"
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology: true}).then(r=> console.log("connected")).catch(error=>console.log(error));
app.get("/", (req, res)=>{
    res.send("sample text");
});
app.get("/about", (req, res)=>{
    res.sendFile("./index.html", {root: __dirname});
})
app.get("/about-us", (req, res)=>{
    res.redirect("./about");
})
app.get("/add-blog", (req, res)=>{
    const blog= new Blog({title: "title",snippet: "snippet", body: "bady"});
    blog.save().then(result=>res.send(result)).catch(console.log)
})
app.get("/all-blogs", (req,res)=>{
    //Blog.findById(id) used for getting id based strings
    Blog.find().then(r=>res.send(r)).catch(e=>console.log(e))})
app.post("/blogs", (req,res)=>{
    const blog= new Blog(req.body);
    console.log(req);
    // blog.save().then(console.log).catch(console.log);
    // res.send("added successfuly")
})

app.post("/person", async (request, response) => {
    try {
        var person = new Blog(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
const http= require("http");
const server=  http.createServer((req,res)=>{
    console.log(req.url, req.method);
    if(req.url==="/")
    {
        res.setHeader("Content-Type", "text/html");
        res.statusCode=200;
        res.write("<p>hello client</p>");
        res.write("<p>hello again, client</p>");
        res.end();
    }
    else if (req.url==="/v2")
    {
        res.setHeader("Content-Type", "text/html");
        res.statusCode=200;
        res.write("<p>v2</p>");
        res.write("<p>v2</p>");
        res.end();
    }
    else
    {
        res.setHeader("Content-Type", "text/html");
        res.statusCode=404;

        res.write("<p>404</p>");
        res.end();
    }

})
server.listen(3000, "localhost", ()=>{
    console.log("server started")
})
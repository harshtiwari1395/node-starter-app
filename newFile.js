const tin="tin";
console.log(tin);
const fs= require("fs");
//below is async function, simple read file op
fs.readFile("./hello.txt", (err,data)=>{
    if(err)
    console.log(err)
    else
    console.log(data.toString());
})
console.log("this fires before previous file read")

//write file operation
fs.writeFile("./madeFile.txt", "khosla ka ghosla", ()=>{console.log("file was created & written")}
);
//modify file
fs.writeFile("./madeFile.txt", " gurrr gurrr bhaaau", ()=>{console.log("file was overwritten")}
);
//make directory, check if it exists, remove directory
if(!fs.existsSync("./madeFolder"))
{
    fs.mkdir("./madeFolder", (err)=>{
        if(err)
        console.log(err);
        else
        console.log("folder created");
    })
}
else{
    fs.rmdir("./madeFolder", (err)=>{
        if(err)
        console.log(err);
        else
        console.log("folder deleted");
    })
}
//deleting a file if it exists
if(fs.existsSync("./madeFile.txt"))
{
    fs.unlink("./madeFile.txt", err=>console.log(err));
}
// writing streams to file

const writeStream= fs.createWriteStream("./writeStream.txt");
// large files take a lot of timein reading,so we can buffer them
const readStream= fs.ReadStream("./largeFile.txt", {encoding: "utf8"});
readStream.on("data", (chunk)=>{
    console.log("--------new chunk------------");
    console.log(chunk);
    writeStream.write("\n new chunk \n");
    writeStream.write(chunk);
})

//piping readstream to writeStream 
readStream.pipe(writeStream);//does the same as 47 to 52 lines
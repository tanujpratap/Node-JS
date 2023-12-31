const fs=require("fs");
//sync
fs.writeFileSync("./test.txt","hey there");
//async
fs.writeFile("./test.txt","hey there async call", (err) => {});
const result=fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log(result);
    }
})
const http=require('http')
const fs = require('fs'); 

const readStream = fs.createReadStream(`${__dirname}/dummyText.txt`,'utf8');

const server= http.createServer((req,res)=>{
    readStream.pipe(res)
})

server.listen(3000);

const writeStream = fs.createWriteStream(`${__dirname}/data.txt`);
readStream.on("data", (data) => {
    console.log(data)
    // writeStream.write(data)
})

readStream.pipe(writeStream)
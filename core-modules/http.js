const http = require('http');


const server = http.createServer((req, res) => {
    res.write("Ashraful islam");
    res.end()
})

server.listen(5000,()=> {
    console.log(`Server is runing on port 5000`)
})
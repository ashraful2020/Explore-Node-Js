const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Http module's</title></head>");
    res.write(
      "<body> <form method='post' action='/procces'> <input name='message'/> </form></body>"
    );
    res.end();
  } else if (req.url === "/procces" && req.method == "POST") {
    const element=[]
    req.on("data", (buffer) => {
      element.push(buffer);
    });
    
    req.on("end", () => { 
const totalData = Buffer.concat(element).toString()
      console.log(totalData)
    });

    res.write("Thank you for submitting");
    res.end();
  } else {
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
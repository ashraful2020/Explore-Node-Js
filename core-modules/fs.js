const fs = require("fs");

// Create a new file in server using Node js
fs.writeFileSync("fileName.txt", "Hello Developers, How are you")

// Update File content on the same file .

fs.appendFileSync("fileName.txt", " I'm Ashraful");

// Data data from file ..

const data = fs.readFileSync("fileName.txt")

//Another way to read data.............
fs.readFile("fileName.txt", (error, data)=>{
    console.log(data.toString())
}) 
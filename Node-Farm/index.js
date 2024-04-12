/* const hello = 'Hello World';
console.log(hello) */

const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is the Text in the file: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File Created!");

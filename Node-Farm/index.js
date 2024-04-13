// FILES
/* const hello = 'Hello World';
console.log(hello) */

/* const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is the Text in the file: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File Created!");
 */

/* // CREATING A SIMPLE WEB SERVER
const http = require('http');
const url = require('url');


// SERVER
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
}); */

// CREATING A SIMPLE WEB SERVER WITH ROUTER
const http = require("http");
const url = require("url");

// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
        res.end("This is the OVERVIEW");
    } else if (pathName === "/product") {
        res.end("This is the PRODUCT");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world",
        });
    }
    res.end("<h1>Page not found!</h1>");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});

var http = require('http')
http.createServer(function(req, res){
 
    //res.end("Hello User") 
    if (req.url == '/') {
 
        // Set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
 
        // Set response content   
        res.write(
            `<html><body style="text-align:center;">
            <h1 style="color:green;">Web Server</h1>
            <p>HTTP Module</p>
            </body></html>`);
        res.end();//end the response
 
    }
    else if (req.url == "/http") {
 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
        <html><body style="text-align:center;">
            <h1 style="color:green;">HTTP Module </h1>
            <a href="https://www.geeksforgeeks.org/node-js-web-server/">
            Read Web Server using HTTP module
            </a>
        </body></html>`);
        res.end();//end the response
 
    }
    else if (req.url == "/fs") {
 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body style="text-align:center;">
        <h1 style="color:green;">File Server</h1>
        <a href="https://www.geeksforgeeks.org/build-a-simple-static-file-web-server-in-node-js/">
            Read File Server using fs Module
        </a>
        </body></html>`);
        res.end(); //end the response
 
    }
    else
        res.end('Invalid Request!'); //end the response
 
   }).listen(8080)
console.log('server running at port 8080')

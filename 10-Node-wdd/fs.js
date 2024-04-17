const express = require("express");
const app = express();
var fs=require('fs')
fs.readFile('demo.txt', 'utf8',function(err,data){
console.log(data)
});
fs.appendFile('demo.txt', 'welcome',function(err){
    console.log('Done')
});
fs.rename('demo.txt','ss.txt',function(err){
        console.log('File renamed')
});
    
fs.unlink('deletedemo.txt',function(err){
        console.log('File deleted')
});

app.listen(4000);
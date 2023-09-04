
var http = require('http')
var model = require('./S21_P01_model');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello coder... "+model.S21_P01_model())
    res.end("<h1>hi Kites</h1>")
    console.log("jiskdfkj")

}).listen(8083)
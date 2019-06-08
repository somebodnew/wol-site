const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const express = require("express");
const app = express();
const router = express.Router();
  
http.createServer(function (request, response) {
	
	var extname = path.extname(request.url);
    switch (extname) { 
		case ".html":
			var filePath = "html/" + request.url.substr(1);
    		fs.readFile(filePath, function(error, data){
              
        	if (error) {
                  
            	//response.statusCode = 404;
            	response.end(fs.readFile("html/404.html", function (err, dat) {
					response.end(dat);
				}));
        	}   
        	else {
            	response.end(data);
        	}
    		});
			break;
		default:
			var filePath = request.url.substr(1);
    		fs.readFile(filePath, function(error, data){
              
        	if (error) {
                  
            	//response.statusCode = 404;
            	response.end(fs.readFile("html/404.html", function (err, dat) {
					response.end(dat);
				}));
        	}   
        	else {
            	response.end(data);
        	}
    		});
			break;
	}
}).listen(3000);
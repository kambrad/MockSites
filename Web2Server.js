var express = require('express');

const app = express();
var fs = require('fs');


var path = "C:/Users/Kam/Desktop/HTML/Mock/Web2.html";

fs.readFile(path, "utf-8", function(err, data) {
    try
    {
        app.get('/', (req, res) => {
            res.send(data);
        })
    }catch(error)
    {
        error = err;

        console.log(error);
    }
})



var PORT = 8000;

app.listen(PORT, () => {
    console.log(PORT);
})
(function(){

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    app.use(express.static('client'));
    app.use(express.static('files'));
    app.use(express.static(__dirname));

// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json());

    app.post('/', function (req, res) {

        res.setHeader('Content-Type', 'text/plain')
        res.write('you posted:\n')
        res.end(JSON.stringify(req.body, null, 2))
        if(req.body.title === 'btn1 start') {
            //start bulb one
            console.log("started1");
        } else if(req.body.title === 'btn1 stop') {
            console.log("stop 1");
        } else if(req.body.title === 'btn2 start') {
            console.log("two started...");
        } else if(req.body.title === 'btn2 stop') {
            console.log("two stopped ...");
        } else if(req.body.title === 'btn3 start') {
            console.log("three started...");
        } else if(req.body.title === 'btn3 stop') {
            console.log("three stoppped....")
        }
    });


    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });

})();
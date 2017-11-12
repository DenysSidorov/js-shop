// import app from '../../server';
var request = require('request');
// var express = require('express');
// var app = express();
export default () => {
    var times = 0;
    var getSite = function () {
        request(process.env.SITE, function (error, response, body) {
            if (error) {
                console.log("Error: " + error);
            }

            times++
            console.log(times, ' times');
        })
    };

// setInterval(getSite ,1000*10);
// open site every 25 min
    setInterval(getSite, 1000 * 60 * 10);
    setTimeout(getSite, 3000);
    setTimeout(getSite, 15000);


// var port = process.env.PORT || 8080;
// app.listen(port);
// console.log('Express server listening on port ' + port);
}
//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    var today = new Date();
    var dayNum = today.getDay();
    var dayStr = '';

    switch (dayNum) {
        case 0:
            dayStr = "sun";
            break;
        case 1:
            dayStr = "mon";
            break;
        case 2:
            dayStr = "tue";
            break;
        case 3:
            dayStr = "wed";
            break;
        case 4:
            dayStr = "thu";
            break;
        case 5:
            dayStr = "fri";
            break;
        case 6:
            dayStr = "sat";
            break;
        default:
        dayStr = "error: day number = " + dayNum;
    }

    res.render('list', {
        day: dayStr
    });

});

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
// console.log(__dirname);

app.listen(port, () => console.log(`Listening on port ${port}`));

// app.use(bodyParser.urlencoded({extended: true}));

// app.post('/', function(req, res) {
//     console.log(req.body);
//     res.send('test posted');
// });
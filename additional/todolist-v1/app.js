//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

var items = ['item1', 'item2'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function (req, res) {

    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    var formattedDay = today.toLocaleDateString('en-US', options);

    res.render('list', {
        day: formattedDay,
        items: items
    });

});


app.post("/", function(req, res) {
    items.push(req.body.item);
    res.redirect('/');
});

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
// console.log(__dirname);

app.listen(port, () => console.log(`Listening on port ${port}`));
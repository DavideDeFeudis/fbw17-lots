//jshint esversion:6

const express = require('express');

const app = express();

// here is what happens when the user goes to the home page (root)
app.get("/", function (req, res) {
    // here goes what the server sends back to the browser
    // console.log(req);
    // res.send("hello");
    res.send("<h1>hello</h1>");
});

// here is what happens when the user goes to /contacts. no need to create contacts.html
app.get("/contacts", function (req, res) {
    res.send("contact me");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});

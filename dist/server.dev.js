"use strict";

var express = require('express');

var app = express();

var path = require('path');

var port = 8080;

var urllib = require('urllib');

app.use(express["static"](path.join(__dirname, 'dist')));
app.use(express["static"](path.join(__dirname, 'node_modules')));
app.get('/recipes/:ingredient', function (req, res) {
  var wantedIngredient = req.params.ingredient;
  urllib.request("https://recipes-goodness.herokuapp.com/recipes/".concat(wantedIngredient), function (err, data) {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});
app.get('/sanity', function (req, res) {
  res.send('ok');
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
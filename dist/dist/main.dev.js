"use strict";

var getRecipes = function getRecipes() {
  $(".recipe-container").empty();
  var recipeName = $("input").val();
  $.get("/recipes/".concat(recipeName), function (data) {
    console.log(data);
  });
};
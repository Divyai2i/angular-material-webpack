"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.chips", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/chips", {
    templateUrl : "templates/chips.html",
    controller  : "ChipsController"
  });

}])

.controller("ChipsController", function() {
  var self = this;
  self.readonly = false;
  // Lists of fruit names and Vegetable objects
  self.fruitNames = ["Apple", "Banana", "Orange"];
  self.roFruitNames = angular.copy(self.fruitNames);
  self.tags = [];
  self.vegObjs = [
    {
      "name" : "Broccoli",
      "type" : "Brassica"
    },
    {
      "name" : "Cabbage",
      "type" : "Brassica"
    },
    {
      "name" : "Carrot",
      "type" : "Umbelliferous"
    }
  ];
  self.newVeg = function(chip) {
    return {
      name: chip,
      type: "unknown"
    };
  };
});

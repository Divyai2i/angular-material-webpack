"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.card", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/card", {
    templateUrl : "templates/card.html",
    controller  : "CardController"
  });

}])
.controller("CardController", function($scope) {
  $scope.imagePath = "/src/img/fox.png";
});

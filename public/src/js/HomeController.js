"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.home", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/home", {
    templateUrl : "templates/home.html",
    controller  : "HomeController"
  });

}])

.controller("HomeController", function ($scope) {
  $scope.name  = "Home";

  $scope.changeName = function() {
    this.name = "Home Changed";
  };
});

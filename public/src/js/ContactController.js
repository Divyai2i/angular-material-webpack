"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.contact", [
  ngRoute
])


.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/contact", {
    templateUrl : "templates/contact.html",
    controller  : "ContactController"
  });

}])

.controller("ContactController", function ($scope) {
  $scope.name  = "Contact";

  $scope.changeName = function() {
    this.name = "Contact changed";
  };
});

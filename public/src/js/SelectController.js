"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.select", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/select", {
    templateUrl : "templates/select.html",
    controller  : "SelectController"
  });

}])

.controller("SelectController", function ($timeout, $scope) {
  $scope.userState = "";
  $scope.states = ["AL", "AK", "AZ", "CA"];

  $scope.user = null;
  $scope.users = null;

  $scope.loadUsers = function() {
    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $scope.users =  $scope.users  || [
        { id: 1, name: "Scooby Doo" },
        { id: 2, name: "Shaggy Rodgers" },
        { id: 3, name: "Fred Jones" },
        { id: 4, name: "Daphne Blake" },
        { id: 5, name: "Velma Dinkley" }
      ];
    }, 650);
  };
});

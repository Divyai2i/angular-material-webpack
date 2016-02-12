"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.swipe", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/swipe", {
    templateUrl : "templates/swipe.html",
    controller  : "SwipeController"
  });

}])

.controller("SwipeController", function ($scope) {
  $scope.onSwipeLeft = function(ev) {
    alert('You swiped left!!');
  };
  $scope.onSwipeRight = function(ev) {
    alert('You swiped right!!');
  };
  $scope.onSwipeUp = function(ev) {
    alert('You swiped up!!');
  };
  $scope.onSwipeDown = function(ev) {
    alert('You swiped down!!');
  };
});

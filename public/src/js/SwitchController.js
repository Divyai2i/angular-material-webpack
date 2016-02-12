"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.switch", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/switch", {
    templateUrl : "templates/switch.html",
    controller  : "SwitchController"
  });

}])

.controller("SwitchController", function ($scope) {
  $scope.data = {
    cb1: true,
    cb4: true,
    cb5: false
  };
  $scope.message = "false";
  $scope.onChange = function(cbState) {
  	$scope.message = cbState;
  };
});

"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.icon", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/icon", {
    templateUrl : "templates/icon.html",
    controller  : "IconController"
  });

}])

.controller("IconController", function($scope) {
  
  $scope.insertDriveIconURL = 'src/img/ic_android_black_24px.svg';
 
})

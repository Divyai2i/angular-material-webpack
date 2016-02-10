"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.datepicker", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/date-picker", {
    templateUrl : "templates/date-picker.html",
    controller  : "DatePickerController"
  });

}])

.controller("DatePickerController", function($scope) {

  $scope.myDate  = new Date();

  $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate()
  );

  $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 2,
    $scope.myDate.getDate()
  );

  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };
});

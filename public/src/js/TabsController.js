"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.tabs", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/tabs", {
    templateUrl : "templates/tabs.html",
    controller  : "TabsController"
  });

}])

.controller("TabsController", function ($scope) {
});

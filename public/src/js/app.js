"use strict";

require("../css/style.css");
require("../css/slide-effect.css");
require("angular-material/angular-material.css");

var angular = require("angular");
var ngRoute = require("angular-route");
var ngAnimate = require("angular-animate");
var ngAria = require("angular-aria");

var ngMaterial = require("angular-material");

require("./HomeController");
require("./ContactController");

angular.module("app", [
  ngRoute,
  ngAnimate,
  ngAria,
  ngMaterial,
  "app.home",
  "app.contact"
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({ redirectTo : "/home"});
}]);

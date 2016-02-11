"use strict";

require("../css/style.css");
require("../css/slide-effect.css");
require("angular-material/angular-material.css");
require("../css/icon.css");
require("../css/input.css");

//hola
var angular  = require("angular");
var ngRoute = require("angular-route");
var ngAnimate = require("angular-animate");
var ngAria = require("angular-aria");
var ngMaterial = require("angular-material");
var ngMessages = require("angular-messages");

require("./HomeController");
require("./AutoCompleteController");
require("./DatePickerController");
require("./BottomSheetController");
require("./IconController");
require("./InputController");

angular.module("app", [
  ngRoute,
  ngAnimate,
  ngAria,
  ngMaterial,
  // required for datepicker sample
  ngMessages,
  "app.home",
  "app.autocomplete",
  "app.datepicker",
  "app.bottomsheet",
  "app.icon",
  "app.input"
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({ redirectTo : "/home"});
}])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('grey')
    .warnPalette('red');
});
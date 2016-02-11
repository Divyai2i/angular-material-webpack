"use strict";

require("../css/style.css");
require("../css/slide-effect.css");
require("angular-material/angular-material.css");

require("../css/icon.css");
require("../css/input.css");

var angular    = require("angular");
var ngRoute    = require("angular-route");
var ngAnimate  = require("angular-animate");
var ngAria     = require("angular-aria");
var ngMaterial = require("angular-material");
var ngMessages = require("angular-messages");

require("./HomeController");
require("./AutoCompleteController");
require("./DatePickerController");
require("./BottomSheetController");
require("./IconController");
require("./InputController");
require("./ChipsContoller");
require("./CardController");
require("./DialogController");
require("./ToolbarController");



angular.module("app", [
  ngRoute,
  ngAnimate,
  ngAria,
  ngMaterial,
  ngMessages,
  "app.home",
  "app.autocomplete",
  "app.datepicker",
  "app.bottomsheet",
  "app.icon",
  "app.input",
  "app.chips",
  "app.card",
  "app.dialog",
  "app.toolbar"
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({ redirectTo : "/home"});
}])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme("default")
    .primaryPalette("deep-purple")
    .accentPalette("purple")
    .warnPalette("deep-orange");
});

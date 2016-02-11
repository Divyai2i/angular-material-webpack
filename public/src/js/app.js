"use strict";

require("../css/style.css");
require("../css/slide-effect.css");
require("angular-material/angular-material.css");

require("../css/icon.css");
require("../css/input.css");
require("../css/menu-bar.css");
require("../css/radio.css");

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
require("./FormDialogController");
require("./ToolbarController");
require("./MenuBarController");
require("./RadioController");
require("./SelectController");



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
  "app.formdialog",
  "app.toolbar",
  "app.menubar",
  "app.radio",
  "app.select"
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

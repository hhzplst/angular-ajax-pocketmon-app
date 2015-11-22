var app = angular.module("customDirectives", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html",
      controller: "PocketmonCtrl"
    });
});
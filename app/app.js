var app = angular.module("L4X", ["ngMaterial", "ui.router"]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('teal');
})	
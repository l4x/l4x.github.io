app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/components/home/home.html",
      controller: "HomeController"
    })

    .state('work', {
      url: '/work',
      templateUrl: 'app/components/work/work.html',
      controller: 'WorkController'
    })
  ;
});
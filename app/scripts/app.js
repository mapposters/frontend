var app = angular.module('mapPostersApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html'
      })
      .when('/map/:id', {
        templateUrl: 'views/map.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

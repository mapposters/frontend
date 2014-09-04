var app = angular.module('frontendApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('HomepageCtrl', ['$scope' ,'MapApi', '$timeout', '$http',
    function ($scope, MapApi, $timeout, $http) {

    MapApi.getRegions().
      success(function(data, status, headers, config) {
        console.log('success', data);
      }).
      error(function(data, status, headers, config) {
        console.log('error', data);
      });
      
    //
    // $scope.example = [
    //   {
    //     image : 'http://placehold.it/700x400',
    //     name: 'Chicago',
    //     description: 'adjlk jfkl jdfkj dasklf jkladsjf lkasjdf lk'
    //   },
    //   {
    //     image : 'http://placehold.it/700x400',
    //     name: 'Toronto',
    //     description: 'adjlk jfkl jdfkj dasklf jkladsjf lkasjdf lk'
    //   }
    // ];

}]);

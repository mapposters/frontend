app.controller('HomepageCtrl', ['$scope' ,'MapApi', '$timeout', '$http',
    function ($scope, MapApi, $timeout, $http) {

    // MapApi.getRegions().
    //   success(function(data, status, headers, config) {
    //     console.log('success', data);
    //   }).
    //   error(function(data, status, headers, config) {
    //     console.log('error', data);
    //   });

    //
    $scope.regions = [
      {
        id: 1,
        image : 'http://placehold.it/700x400',
        name: 'Chicago',
        description: 'adjlk jfkl jdfkj dasklf jkladsjf lkasjdf lk'
      },
      {
        id: 2,
        image : 'http://placehold.it/700x400',
        name: 'Toronto',
        description: 'Toronto is the most populous city in Canada and the provincial capital of Ontario. It is located in Southern Ontario on the northwestern shore of Lake Ontario. The history of Toronto began in the late 18th century when the British Crown purchased its land from the Mississaugas of the New Credit. The settlement established there became York, which lieutenant governor John Graves Simcoe designated as the capital of Upper Canada. The city was ransacked in the Battle of York during the War of 1812. In 1834, York became a city and renamed to Toronto. It was damaged in two huge fires in 1849 and 1904. Since 1954, the city occasionally expanded its borders through amalgamation with surrounding municipalities, most recently occurring in 1998.'
      }
    ];

}]);

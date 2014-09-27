app.factory('MapApi', ['$http', function($http) {

  var _url = function() {
    return 'http://107.170.68.187:5000';
  };

  return {
    getRegions: function() {
      var url = _url() +'/regions';
      return $http.get(url);
    },
    getMap: function(id){
      var url = _url() + '/map/' + id;
      return $http.get(url);
    }
  };
}]);

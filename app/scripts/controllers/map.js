app.controller('MapCtrl', function ($scope, $timeout, $http) {

	//access token
	L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q';
	// Create a map in the div #map
	L.mapbox.map('map', 'examples.ra3sdcxr');

});

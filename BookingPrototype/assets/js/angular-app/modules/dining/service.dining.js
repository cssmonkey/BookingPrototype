app.factory('diningService', function ($http, $location, $window, $timeout) {
	var diningService = {};

	diningService.proceedBooking = function () {

		// faking onsuccess function...
		var timer = $timeout(function () {
			$location.path('guest-details/');
		}, 1000)
	};

	return diningService;

});
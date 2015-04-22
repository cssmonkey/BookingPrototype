app.factory('availabilityService', function ($http, $location, $window, $timeout) {
	var availabilityService = {};

	availabilityService.proceedBooking = function () {

		// faking onsuccess function...
		var timer = $timeout(function () {
			$location.path('extras/');
		}, 1000)
	};

	return availabilityService;

});
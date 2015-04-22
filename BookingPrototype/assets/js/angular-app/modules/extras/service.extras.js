app.factory('extrasService', function ($http, $location, $window, $timeout) {
	var extrasService = {};

	extrasService.proceedBooking = function () {

		// faking onsuccess function...
		var timer = $timeout(function () {
			$location.path('dining/');
		}, 1000)
	};

	return extrasService;

});
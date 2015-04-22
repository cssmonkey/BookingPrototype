app.controller('extrasController', function ($scope, $rootScope, extrasService) {

	$rootScope.pageLoading = false; // page content loaded
	$rootScope.showProgressBar = true;
	$rootScope.currentStep = 2;
	$rootScope.page = {};
	$rootScope.page.title = "Add something extra";

	APP.progressBar.update($rootScope.currentStep);

	$scope.submit = function (e) {
		e.preventDefault();

		$rootScope.pageLoading = true;

		extrasService.proceedBooking();
	}

});
app.controller('diningController', function ($scope, $rootScope, diningService) {

	$rootScope.pageLoading = false; // page content loaded
	$rootScope.showProgressBar = true;
	$rootScope.currentStep = 3;
	$rootScope.page = {};
	$rootScope.page.title = "Dine with us";

	APP.progressBar.update($rootScope.currentStep);

	$scope.submit = function (e) {
		e.preventDefault();

		$rootScope.pageLoading = true;

		diningService.proceedBooking();
	}

});
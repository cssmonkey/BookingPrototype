app.controller('guestDetailsController', function ($scope, $rootScope, bookFormService) {

	$rootScope.pageLoading = false; // page content loaded
	$rootScope.showProgressBar = true;
	$rootScope.currentStep = 4;
	$rootScope.page = {};
	$rootScope.page.title = "Your details";

	APP.progressBar.update($rootScope.currentStep);

});
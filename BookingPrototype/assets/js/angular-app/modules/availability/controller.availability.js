app.controller('availabilityController', function ($scope, $rootScope, availabilityService) {

    $rootScope.pageLoading = false; // page content loaded
    $rootScope.showProgressBar = true;
    $rootScope.currentStep = 1;
    $rootScope.page = {};
    $rootScope.page.title = "Check availability";

    APP.progressBar.update($rootScope.currentStep);

	// prototype stuff
    $scope.expand_0 = $scope.expand_1 = $scope.expand_2 = false;

    $scope.submit = function (e) {
    	e.preventDefault();

    	$rootScope.pageLoading = true;

    	availabilityService.proceedBooking();
    }

});
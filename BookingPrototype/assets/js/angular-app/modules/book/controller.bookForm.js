app.controller('bookFormController', function ($scope, $rootScope, bookFormService) {

    $rootScope.pageLoading = false; // page content loaded

    // local scope
    $scope.bookForm = {};
    $rootScope.page = {};
    $rootScope.page.title = "Book your stay";

    $scope.bookForm.numNightOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14+']; 
    $scope.bookForm.roomsSelectOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

    $scope.bookForm.numNights = $scope.bookForm.numNightOptions[0]; // set default value of numNights select
    $scope.bookForm.roomsSelect = $scope.bookForm.roomsSelected = $scope.bookForm.roomsSelectOptions[0]; // set default value of numRooms select

    // display guest dropdowns per room
    $scope.updateRoomsSelected = function () {

        $scope.bookForm.roomsSelected = [];

        var roomVal = $scope.bookForm.roomsSelect;
        for (var i = 0; roomVal > i; i++) {
            $scope.bookForm.roomsSelected.push(i);
        }

        $scope.bookForm.roomsSelected = $scope.bookForm.roomsSelected;
    };

    // --- On form submit --------------------
    $scope.submitForm = function (isValid) {
        $rootScope.pageLoading = true;

        bookFormService.proceedBooking();

        // form validation
        //if (!isValid) {
        //    $scope.formSubmitted = true;
        //}
        //else {
            
        //}
    }

});
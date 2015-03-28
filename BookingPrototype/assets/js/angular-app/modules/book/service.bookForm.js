app.factory('bookFormService', function ($http, $location, $window, $timeout) {
    var bookFormService = {};

    bookFormService.proceedBooking = function () {

        // faking onsuccess function...
        var timer = $timeout(function () {
            $location.path('availability/');
        }, 1000)
    };

    return bookFormService;

});
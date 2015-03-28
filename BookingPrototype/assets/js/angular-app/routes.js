app.config(function ($routeProvider) {
    $routeProvider.when(
    '/', {
        templateUrl: '/assets/js/angular-app/modules/book/book.html'
    });
    $routeProvider.when(
    '/availability/', {
        templateUrl: '/assets/js/angular-app/modules/availability/availability.html'
    });
    $routeProvider.when(
    '/dining/', {
        templateUrl: '/assets/js/angular-app/modules/dining/dining.html'
    });
    $routeProvider.when(
    '/extras/', {
        templateUrl: '/assets/js/angular-app/modules/extras/extras.html'
    });
    $routeProvider.when(
    '/guest-details/', {
        templateUrl: '/assets/js/angular-app/modules/guest-details/guest-details.html'
    });
    $routeProvider.when(
    '/payment/', {
        templateUrl: '/assets/js/angular-app/modules/payment/payment.html'
    });
    $routeProvider.when(
    '/confirmation/', {
        templateUrl: '/assets/js/angular-app/modules/confirmation/confirmation.html'
    });
});
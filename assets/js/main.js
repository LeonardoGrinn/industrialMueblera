// Build module.
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// Routes configuration. 
myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'vistas/inicio.html',
            controller  : 'mainController'
        })
        .when('/nosotros', {
            templateUrl : 'vistas/nosotros.html',
            controller  : 'aboutController'
        })
        .when('/portafolio', {
            templateUrl : 'vistas/portafolio.html',
            controller  : 'portafolioController'
        })
        .when('/portafolio/hotel', {
            templateUrl : 'vistas/portafolio/hotel.html',
            controller  : 'hotelController'
        })
        .when('/portafolio/bar', {
            templateUrl : 'vistas/portafolio/bar.html',
            controller  : 'barController'
        })
        .when('/portafolio/restaurant', {
            templateUrl : 'vistas/portafolio/restaurant.html',
            controller  : 'restaurantController'
        })
        .when('/contacto', {
            templateUrl : 'vistas/contacto.html',
            controller  : 'contactoController'
        })



        .otherwise({
            redirectTo: '/'
        });
});

myApp.controller('mainController', function ($scope) {

});

myApp.controller('aboutController', function ($scope) {

});

myApp.controller('portafolioController', function ($scope) {

});

myApp.controller('hotelController', function ($scope) {

  });

myApp.controller('barController', function ($scope) {

  });

myApp.controller('restaurantController', function ($scope) {

  });

myApp.controller('contactoController', function ($scope) {

});


myApp.controller('ctrl', function ($scope) {
});


//Bakcground image directive. 
myApp.directive('backImg', function () {
    return function (scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')'
        });
    };
});
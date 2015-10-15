'use strict'; 

var app = angular.module('app' , ['ngRoute', 'controllers']);

app.config( ['$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ){

	$routeProvider.when('/products', {
		controller : 'products',
		templateUrl : 'partials/products.php'
	});

	$routeProvider.when('/product/:id', {
		controller : 'product',
		templateUrl : 'partials/product.php'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});


}]);



'use strict'; 

var app = angular.module('app' , ['ngRoute', 'myCtrls']);

app.config( ['$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ){

	$routeProvider.when('/products', {
		controller : 'products',
		templateUrl : 'partials/products.php'
	});

	$routeProvider.when('/product/edit/:id', {
		controller : 'productEdit',
		templateUrl : 'partials/product-edit.php'
	});

	$routeProvider.when('/product/create', {
		controller : 'productCreate',
		templateUrl : 'partials/product-create.php'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});


}]);



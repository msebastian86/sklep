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

	$routeProvider.when('/users', {
		controller : 'users',
		templateUrl : 'partials/users.php'
	});

	$routeProvider.when('/user/edit/:id', {
		controller : 'userEdit',
		templateUrl : 'partials/user-edit.php'
	});

	$routeProvider.when('/user/create', {
		controller : 'userCreate',
		templateUrl : 'partials/user-create.php'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});


}]);



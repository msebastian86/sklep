'use strict'; 

var app = angular.module('app' , ['ngRoute', 'myCtrls']);

app.config( ['$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ){

	// ============== products ==================

	$routeProvider.when('/admin/products', {
		controller : 'products',
		templateUrl : 'partials/admin/products.php'
	});

	$routeProvider.when('/product/edit/:id', {
		controller : 'productEdit',
		templateUrl : 'partials/admin/product-edit.php'
	});

	$routeProvider.when('/product/create', {
		controller : 'productCreate',
		templateUrl : 'partials/admin/product-create.php'
	});

	// ============== users ==================

	$routeProvider.when('/admin/users', {
		controller : 'users',
		templateUrl : 'partials/admin/users.php'
	});

	$routeProvider.when('/user/edit/:id', {
		controller : 'userEdit',
		templateUrl : 'partials/admin/user-edit.php'
	});

	$routeProvider.when('/user/create', {
		controller : 'userCreate',
		templateUrl : 'partials/admin/user-create.php'
	});

	// ============== orders ==================

	$routeProvider.when('/admin/orders', {
		controller : 'orders',
		templateUrl : 'partials/admin/orders.php'
	});

	// ============== home ==================

	$routeProvider.otherwise({
		redirectTo: '/home'
	});


}]);



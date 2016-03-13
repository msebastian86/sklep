'use strict'; 

var app = angular.module('app' , ['ngRoute', 'angular-storage', 'angular-jwt', 'controllersNavigation', 'controllersAdmin', 'controllersSite', 'myServices']);

app.config( ['$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ){

	// ============== Admin products ==================

	$routeProvider.when('/admin/products', {
		controller : 'products',
		templateUrl : 'partials/admin/products.php'
	});

	$routeProvider.when('/admin/product/edit/:id', {
		controller : 'productEdit',
		templateUrl : 'partials/admin/product-edit.php'
	});

	$routeProvider.when('/admin/product/create', {
		controller : 'productCreate',
		templateUrl : 'partials/admin/product-create.php'
	});

	// ============== Admin users ==================

	$routeProvider.when('/admin/users', {
		controller : 'users',
		templateUrl : 'partials/admin/users.php'
	});

	$routeProvider.when('/admin/user/edit/:id', {
		controller : 'userEdit',
		templateUrl : 'partials/admin/user-edit.php'
	});

	$routeProvider.when('/admin/user/create', {
		controller : 'userCreate',
		templateUrl : 'partials/admin/user-create.php'
	});

	// ============== Admin orders ==================

	$routeProvider.when('/admin/orders', {
		controller : 'orders',
		templateUrl : 'partials/admin/orders.php'
	});

	// ============== Site products ==================

	$routeProvider.when('/products', {
		controller : 'siteProducts',
		templateUrl : 'partials/site/products.php'
	});

	$routeProvider.when('/product/:id', {
		controller : 'siteProduct',
		templateUrl : 'partials/site/product.php'
	});

	$routeProvider.when('/cart', {
		controller : 'cartCtrl',
		templateUrl : 'partials/site/cart.php'
	});

	$routeProvider.when('/orders', {
		controller : 'siteOrders',
		templateUrl : 'partials/site/orders.php'
	});

	// ============== login & register ==================

	$routeProvider.when('/login', {
		controller : 'login',
		templateUrl : 'partials/site/login.php'
	});

	$routeProvider.when('/register', {
		controller : 'register',
		templateUrl : 'partials/site/register.php'
	});


	// ============== home ==================

	$routeProvider.otherwise({
		redirectTo: '/products'
	});


}]);



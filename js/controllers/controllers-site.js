'use strict';

var controllersSite = angular.module('controllersSite', []);

controllersSite.controller('siteProducts', ['$scope', '$http', 'cartSrv', function($scope, $http, cartSrv){

		$http.get('model/products.json')
			.success( function(data, status, headers){
				$scope.products = data;
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

		$scope.addToCart = function ( product ) {
			cartSrv.add( product );
		};

	// console.log($scope.products[2].opis);

}]);

controllersSite.controller('siteProduct', ['$scope', '$http', '$routeParams', 'cartSrv', function($scope, $http, $routeParams, cartSrv){

		$http.post('model/products.json')

			.success( function(data){
				var products = data;
				$scope.product = products[$routeParams.id];
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

			$scope.addToCart = function ( product ) {
				cartSrv.add( product );
			};

	// console.log($scope.products[2].opis);

}]);


controllersSite.controller('siteOrders', ['$scope', '$http', function($scope, $http){

	$http.get('model/orders.json')
		.success( function(data){
			$scope.orders = data;
		})
		.error( function(){
			console.log('cos sie zjebał JSON :/');
	});

}]);


controllersSite.controller('cartCtrl', ['$scope', '$http', 'cartSrv', function($scope, $http, cartSrv){

	$scope.cart = cartSrv.show();

	$scope.emptyCart = function () {
		cartSrv.empty();
	};

}]);

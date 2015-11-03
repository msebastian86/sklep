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

	$scope.total = function () {

		var total = 0;

		angular.forEach( $scope.cart, function (item){

			total += item.qty * item.price;

		});

		return total;
	};

	$scope.update = function (item, $index) {

		$scope.cart.splice( $index, 1 );
		cartSrv.update( $scope.cart );
	};

	$scope.setOrder = function ( $event ){
		console.log('zamowienie');
		//$event.preventDefault();
	}

	//do sprawdzania zmian w koszyku chociaz u mnie dzialalo bez tego??
	$scope.$watch( function(){
		cartSrv.update();
	});

}]);

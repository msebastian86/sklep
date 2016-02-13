'use strict';

var controllersSite = angular.module('controllersSite', []);

controllersSite.controller('siteProducts', ['$scope', '$http', 'cartSrv', '$timeout', function($scope, $http, cartSrv, $timeout){

		$http.get('api/site/products/get')
			.success( function(data){
				$scope.products = data;
			})
			.error( function(){
				console.log('blad laczenia z api :/');
		});

		$scope.addToCart = function ( product ) {

			cartSrv.add( product );

			if ( cartSrv.show().length )
			{
				angular.forEach(cartSrv.show() , function( item ){
					if( item.id == product .id)
					{
						product.qty = item.qty;
						$timeout(function(){
							product.qty = '';
						} , 1000 );
					}
				});
			}

		};

		$scope.checkCart = function (product) {
			
			if ( cartSrv.show().length )
			{
				angular.forEach(cartSrv.show() , function( item ){
					if( item.id == product .id)
					{
						product.qty = item.qty;
					}
				});
			}
		}


	// console.log($scope.products[2].opis);

}]);

controllersSite.controller('siteProduct', ['$scope', '$http', '$routeParams', 'cartSrv', function($scope, $http, $routeParams, cartSrv){

		var productId = $routeParams.id;

		$http.post('api/site/products/get/' + productId)
			.success( function(data){
				$scope.product = data;
				$scope.checkCart($scope.product);
			})
			.error( function(){
				console.log('blad laczenia z api :/');
		});	

		$scope.addToCart = function ( product ) {
			cartSrv.add( product );
		};

		$scope.checkCart = function (product) {
			
			if ( cartSrv.show().length )
			{
				angular.forEach(cartSrv.show() , function( item ){
					if( item.id == product .id)
					{
						product.qty = item.qty;
					}
				});
			}
		}

		function getImages(){
			
			$http.get('api/site/products/getImages/' + productId)
				.success( function(data){
					$scope.images = data;
				})
				.error( function(){
					console.log('problem z polaczeniem api :/');
			});
		}

		getImages();

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


controllersSite.controller('cartCtrl', ['$scope', '$http', '$filter', 'cartSrv', function($scope, $http, $filter, cartSrv){

	$scope.cart = cartSrv.show();

	$scope.emptyCart = function () {
		cartSrv.empty();
	};

	$scope.total = function () {

		var total = 0;
		angular.forEach( $scope.cart, function (item) {
			total += item.qty * item.price;
		});

		total = $filter( 'number' )( total , 2 );
		return total;
	};

	$scope.removeItem = function ($index) {

		$scope.cart.splice( $index, 1 );
		cartSrv.update( $scope.cart );
	};

	$scope.setOrder = function ( $event ){
		console.log('zamowienie:');
		//$event.preventDefault();

		//TODO: sprawdz czy user zalogowany

		var loggedIn = true;

		if ( !loggedIn )
		{
			$scope.alert = { type : 'warning' , msg : 'Błąd, zaloguj się'};
			$event.preventDefault();
			return false;
			// return zeby zatrzymac funkcje -nie zapisywanie smieci w bazie
		}

		//TODO: zapisz zamowienia w bazie
		console.log( $scope.total() );
		console.log( $scope.cart );

		$scope.alert = { type : 'success' , msg : 'Trwa składanie zamówienia...' };
		//cartSrv.empty();

		$event.preventDefault();
		$( '#paypalForm' ).submit();

	}

	//do sprawdzania zmian w koszyku chociaz u mnie dzialalo bez tego??
	$scope.$watch( function (){
		cartSrv.update( $scope.cart );
	});

}]);


controllersAdmin.controller('orders', ['$scope', '$http', function($scope, $http){

	$http.get('model/orders.json')
		.success( function(data){
			$scope.orders = data;
		})
		.error( function(){
			console.log('cos sie zjebał JSON :/');
	});

}]);


controllersAdmin.controller('login', ['$scope', '$http', function($scope, $http){

	// TODO: pobrać dane z form i przesłac do bazy - uwierztelnainie

	$scope.input = {};

	$scope.formSubmit = function (argument) {
		$scope.errors = {};
		$scope.errors.login = 'Błędne hasło / email';
		console.log( $scope.input );
	};

}]);

controllersAdmin.controller('register', ['$scope', '$http', function($scope, $http){

	// TODO: pobrać dane z form i przesłac do bazy - uwierztelnainie 
	$scope.formSubmit = function (argument) {
		$scope.errors = {};
		$scope.errors.name = 'przykładowy błąd';
		$scope.submit = true;
		console.log( $scope.input );
	};

}]);

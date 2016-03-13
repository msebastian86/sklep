'use strict';

var controllersSite = angular.module('controllersSite', []);

controllersSite.controller('siteProducts', ['$scope', '$http', 'cartSrv', '$timeout', function($scope, $http, cartSrv, $timeout){

		$http.get('api/site/products/get')
			.success( function(data){
				$scope.products = data;
			})
			.error( function(){
				console.log('Blad laczenia z api :/');
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
				console.log('Blad laczenia z api :/');
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
			console.log('Problem pobrania z JSONa :/');
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
			console.log('Problem pobrania z JSONa :/');
	});

}]);


controllersAdmin.controller('login', ['$scope', '$http', 'store', 'checkToken','$location', function($scope, $http, store, checkToken, $location){

	if ( checkToken.loggedIn() )
		$location.path('/products');

	$scope.user = {};

	$scope.formSubmit = function ( user ) {

		$http.post('api/site/user/login/' , {

			// co przekazujemy i pod jaka postacia
			email : user.email,
			password : user.password

			// pobieramy errors z formularza modelu users.php
			}).success( function( data ){

				$scope.submit = true;
				$scope.error = data.error;
				
				if ( !data.error )
				{
					store.set('token', data.token);
					location.reload();
				}

			}).error( function(){
				console.log('Błąd komunikacji z API');
		});
	};

	//console.log( checkToken.payload() );

}]);

controllersAdmin.controller('register', ['$scope', '$http', function($scope, $http){
		
	$scope.user = {};

	$scope.formSubmit = function (user) {

		$http.post('api/site/user/create/' , {

			// co przekazujemy i pod jaka postacia
			user : user,
			name : user.name,
			email : user.email,
			password : user.password,
			passconf : user.passconf

			// pobieramy errors z formularza modelu users.php
			}).success( function( errors ){

				$scope.submit = true;

				// po wysłaniu wyczysci pola
				$scope.user = {};
				
				if ( errors )
				{
					$scope.errors = errors;
				}
				else
				{
					// czysci bledy zeby nie wisialy ciagle
					$scope.errors = {};
					$scope.success = true;
				}

			}).error( function(){
				console.log('Błąd komunikacji z API');
		});

	};

}]);

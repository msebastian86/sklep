/* jshint node: true */

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
				
					}
				});
			}
		};

		$scope.checkCart = function ( product ) {
			if ( cartSrv.show().length )
			{
				angular.forEach( cartSrv.show() , function( item ){
					if ( item.id == product.id )
					{
						product.qty = item.qty;
					}
				});
			}
		};

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
		};

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


controllersSite.controller( 'siteOrders' , [ '$scope' , '$http' , 'checkToken' , function( $scope , $http , checkToken ){

	$http.post( 'api/site/orders/get/' , {

		token: checkToken.raw(),
		payload: checkToken.payload()

	}).success( function( data ){

		$scope.orders = data;

		angular.forEach( $scope.orders , function( order , key ){
			var parsed = JSON.parse( order.items );
			$scope.orders[key].items = parsed;
		});

	}).error( function(){
		console.log( 'Błąd połączenia z API' );
	});

}]);


controllersSite.controller( 'cartCtrl' , [ '$scope' , '$http' , '$filter' , 'cartSrv' , 'checkToken' , function( $scope , $http , $filter , cartSrv , checkToken ){

	$scope.cart = cartSrv.show();

	$scope.emptyCart = function () {
		cartSrv.empty();
	};

	$scope.total = function () {
		var total = 0;
		angular.forEach( $scope.cart , function ( item ) {
			total += item.qty * item.price;
		});
		total = $filter( 'number' )( total , 2 );
		return total;
	};

	$scope.removeItem = function ( $index ) {
		$scope.cart.splice( $index , 1 );
		cartSrv.update( $scope.cart );
	};

	$scope.setOrder = function ( $event ) {

		$event.preventDefault();
	
		if ( !checkToken.loggedIn() )
		{
			$scope.alert = { type : 'warning' , msg : 'Musisz być zalogowany, żeby złożyć zamówienie.' };
			return false;
			// return zeby zatrzymac funkcje -nie zapisywanie smieci w bazie
		}


		$http.post( 'api/site/orders/create/' , {

			token: checkToken.raw(),
			payload: checkToken.payload(),
			items: $scope.cart,
			total: $scope.total()

		}).success( function( data ){

			cartSrv.empty();
			$scope.alert = { type : 'success' , msg : 'Zamówienie złożone. Nie odświeżaj strony. Trwa przekierowywanie do płatności...' };
			$( '#paypalForm' ).submit();

		}).error( function(){
			console.log( 'Błąd połączenia z API' );
		});

	};

	//do sprawdzania zmian w koszyku chociaz u mnie dzialalo bez tego??
	$scope.$watch( function (){
		cartSrv.update( $scope.cart );
	});

}]);


controllersSite.controller('login', ['$scope', '$http', 'store', 'checkToken','$location', function($scope, $http, store, checkToken, $location){

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
				console.log('Błąd komunikacji z API-logowanie');
		});
	};

	//console.log( checkToken.payload() );

}]);

controllersSite.controller('register', ['$scope', '$http', function($scope, $http){
		
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
				console.log('Błąd komunikacji z API - register');
		});

	};

}]);

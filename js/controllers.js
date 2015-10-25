'use strict';


var myCtrls = angular.module('myCtrls' , ['ngRoute']);



myCtrls.controller('navigation', ['$scope', '$location', function($scope, $location){

		console.log( $location.path() );

		$scope.isActive = function ( path ) {
			return $location.path() ===  path;
		};

}]);


myCtrls.controller('products', ['$scope', '$http', function($scope, $http){

		$http.get('model/products.json')
			.success( function(data, status, headers){
				$scope.products = data;
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

		$scope.delete = function ( product, $index ) {

			//console.log( $scope.products[$index] );

			$scope.products.splice( $index , 1 );
			// [który index, ile elementów, dodanie czegoś ]

			//console.log( product );
		};

	// console.log($scope.products[2].opis);

}]);

myCtrls.controller('productEdit', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


		$http.post('model/products.json')

			.success( function(data){
				var products = data;
				$scope.product = products[$routeParams.id];
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

		$scope.saveChanges = function ( product ) {
			console.log( product );
			console.log( $routeParams.id );
		};

	// console.log($scope.products[2].opis);

}]);


myCtrls.controller('productCreate', ['$scope', '$http', function($scope, $http){


		$scope.createProduct = function () {
			// TODO połączyć z API
			console.log( $scope.product );
		};

	// console.log($scope.products[2].opis);

}]);


myCtrls.controller('users', ['$scope', '$http', function($scope, $http){

	$http.get('model/users.json')
		.success( function(data){
			$scope.users = data;
		})
		.error( function(){
			console.log('cos sie zjebał JSON :/');
	});

	$scope.delete = function ( user, $index ) {

		//console.log( $scope.userss[$index] );

		$scope.users.splice( $index , 1 );
		// [który index, ile elementów, dodanie czegoś ]

		//console.log( users );
	};

}]);

myCtrls.controller('userEdit', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


		$http.post('model/users.json')

			.success( function(data){
				var users = data;
				$scope.user = users[$routeParams.id];
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

		$scope.saveChanges = function ( user ) {
			console.log( user );
			console.log( $routeParams.id );
		};

	// console.log($scope.users[2].opis);

}]);


myCtrls.controller('userCreate', ['$scope', '$http', function($scope, $http){


		$scope.createUser = function () {
			// TODO połączyć z API
			console.log( $scope.user );
		};

	// console.log($scope.products[2].opis);

}]);


myCtrls.controller('orders', ['$scope', '$http', function($scope, $http){

	$http.get('model/orders.json')
		.success( function(data){
			$scope.orders = data;
		})
		.error( function(){
			console.log('cos sie zjebał JSON :/');
	});

	$scope.delete = function ( user, $index ) {
		$scope.orders.splice( $index , 1 )
	};

	$scope.changeStatus = function ( order ) {

		if (order.status == 0) 

			order.status = 1;
		else
			order.status = 0;
		
		console.log(order.status);
	};

}]);



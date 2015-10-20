'use strict';


var myCtrls = angular.module('myCtrls' , ['ngRoute']);

myCtrls.controller('products', ['$scope', '$http', function($scope, $http){

		$http.get('model/produkty.json')
			.success( function(data, status, headers){
				$scope.products = data;
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

	// console.log($scope.products[2].opis);

}]);

myCtrls.controller('productEdit', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


		$http.post('model/produkty.json')

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


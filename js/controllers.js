'use strict';


var controllers = angular.module('controllers' , ['ngRoute']);

controllers.controller('products', ['$scope', '$http', function($scope, $http){

		$http.get('model/produkty.json')
			.success( function(data, status, headers){
				$scope.products = data;
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

	// console.log($scope.products[2].opis);

}]);

controllers.controller('product', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


		$http.get('model/produkty.json')
			.success( function(data){
				var products = data;
				$scope.product = products[$routeParams.id];
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

	// console.log($scope.products[2].opis);

}]);


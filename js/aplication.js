'use strict'; 

var app = angular.module('app' , []);

app.controller('products', ['$scope', '$http', function($scope, $http){

	$scope.wyswietlProdukty = function(){

		$http.get('model/produkty.json')
			.success( function(data, status, headers){
				$scope.products = data;
			})
			.error( function(){
				console.log('cos sie zjebał JSON');
		});
			
	};

	// console.log($scope.products[2].opis);

}]);
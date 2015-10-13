'use strict'; 

var app = angular.module('app' , []);

app.controller('products', ['$scope', function($scope){

	$scope.products = [ 
		{ nazwa : 'pomarancza' , waga : 200, opis : "świeże, smaczne, z jamajki"  },
		{ nazwa : 'japko' , waga : 160, opis : "nieświeże, z polski"  }, 
		{ nazwa : 'ananas' , waga : 800, opis : "dobry :P"  } 
	];

	console.log($scope.products[2].opis);

}]);
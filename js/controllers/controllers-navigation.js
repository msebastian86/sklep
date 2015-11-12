'use strict';

var controllersNavigation = angular.module('controllersNavigation' , []);

controllersNavigation.controller('navigation', ['$scope', '$location', 'cartSrv', function($scope, $location, cartSrv){

		//console.log( $location.path() );

		$scope.navigation = function () {

		if ( /^\/admin/.test( $location.path() ) )
			return 'partials/admin/navigation.php';
		else
			return 'partials/site/navigation.php';
		};

		$scope.isActive = function ( path ) {
			return $location.path() ===  path;
		};

		$scope.$watch(function(){
			$scope.cart = cartSrv.show().length;

		});

		console.log($scope.cart);

		//store.set('test', 'zbychu nadpisał!');

}]);

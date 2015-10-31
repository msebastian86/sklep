'use strict';

var controllersNavigation = angular.module('controllersNavigation' , []);

controllersNavigation.controller('navigation', ['$scope', '$location', 'store', function($scope, $location, store){

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

		store.set('test', 'zbychu nadpisał!');

}]);

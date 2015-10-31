'use strict';

var controllersNavigation = angular.module('controllersNavigation' , []);

controllersNavigation.controller('navigation', ['$scope', '$location', function($scope, $location){

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

}]);

'use strict';

var controllersNavigation = angular.module('controllersNavigation' , []);

controllersNavigation.controller('navigation', ['$scope', '$location', 'cartSrv', 'checkToken', function($scope, $location, cartSrv, checkToken){

		//console.log( $location.path() );

		$scope.navigation = function () {


			if ( /^\/admin/.test( $location.path() ) )
			{	

				if ( !checkToken.isAdmin() ){

					window.location.href = '#/products?alert=noAdmin';
				}

				return 'partials/admin/navigation.php';

			} else {

				if ($location.search().alert == 'noAdmin')
					$scope.noAdmin = true;
				else
					$scope.noAdmin = false;


				if ( checkToken.loggedIn() ) {
					
					$scope.loggedIn = true;
				} else {

					$scope.loggedIn = false;
				}

				if ( checkToken.isAdmin() ) {
					
					$scope.isAdmin = true;
				} else {

					$scope.isAdmin = false;
				}

				return 'partials/site/navigation.php';
			}
		};

		$scope.isActive = function ( path ) {
			return $location.path() ===  path;
		};

		$scope.$watch(function(){
			$scope.cart = cartSrv.show().length;
		});

		$scope.logout = function() {
			checkToken.del();
			location.reload();
		};

		//console.log($scope.cart);

		//store.set('test', 'zbychu nadpisał!');

}]);

'use strict';

var controllersAdmin = angular.module('controllersAdmin', [ 'angularFileUpload' , 'myDirectives' ]);

controllersAdmin.controller('products', ['$scope', '$http', function($scope, $http){

		$http.get('api/admin/products/get')
			.success( function(data){
				$scope.products = data;
			})
			.error( function(){
				console.log('Problem z połączeniem do sql :/');
		});

		$scope.delete = function ( product, $index ) {

			if ( !confirm ( 'czy napewno usunac produkt?' ) )
				return false;
			
			// [który index, ile elementów, dodanie czegoś ]
			$scope.products.splice( $index , 1 );
			//console.log( $scope.products[$index] );


			$http.post('api/admin/products/delete/' , {
				product : product
			}).error( function(){
				console.log('Błąd komunikacji z API');
			});
		};

	// console.log($scope.products[2].opis);

}]);

controllersAdmin.controller('productEdit', ['$scope', '$http', '$routeParams', 'FileUploader', '$timeout' , function($scope, $http, $routeParams, FileUploader, $timeout){

		var productId = $routeParams.id;
		$scope.id = productId;


		$http.get('api/admin/products/get/' + productId)

			.success( function(data){
				$scope.product = data;
			})
			.error( function(){
				console.log('problem z popraniem danych bazy sql :/');
		});

		$scope.saveChanges = function ( product ) {

			$http.post('api/admin/products/update/' , {

				product : product

				}).success( function(){
					$scope.success = true;

					// timeout to serwis angulara, do opóźnien, rejestrowany troche wyżej...

					$timeout(function(){
						$scope.success = false;	
					} , 3500 );
				})
				.error( function(){
					console.log('problem z popraniem danych bazy sql :/');
			});

			// console.log( product );
			// console.log( productId );
		};

		function getImages(){
			
			$http.get('api/admin/images/get/' + productId)
				.success( function(data){
					$scope.images = data;
				})
				.error( function(){
					console.log('problem z popraniem danych bazy sql :/');
			});
		}

		getImages();

		var uploader = $scope.uploader = new FileUploader({
            url: 'api/admin/images/upload/' + productId //sciezka do api obslugujacego upload
        });

        // FILTERS dla uploadera (ogranicza pliki do obrazków)

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            // console.info('onCompleteItem', fileItem, response, status, headers);
            getImages();
        };

        $scope.delImage = function ( imageName, $index ) {
        	$scope.images.splice( $index , 1 )

        	$http.post('api/admin/images/delete/', {

        		id : productId,
        		image : imageName

        	})
        		.success( function(){
        			
        		})
        		.error( function(){
        			console.log('Problem pobierania z JSONa :/');
        	});


        	console.log("usunięte");
        };

		// console.log($scope.products[2].opis);

}]);


controllersAdmin.controller('productCreate', ['$scope', '$http', '$timeout',  function($scope, $http, $timeout){


		$scope.createProduct = function ( product ) {
			$http.post('api/admin/products/create/' , {

				product : product

				}).success( function(){
					$scope.success = true;

					// timeout to serwis angulara, do opóźnien, rejestrowany troche wyżej...

					$timeout(function(){
						$scope.success = false;

						// żeby się wyczyscily pola
						$scope.product = {};

					} , 3500 );
				})
				.error( function(){
					console.log('Błąd komunikacji z API');
			});
		};

	// console.log($scope.products[2].opis);

}]);


controllersAdmin.controller('users', ['$scope', '$http', function($scope, $http){




	$http.get('api/admin/users/get')
		.success( function(data){
			$scope.users = data;
		})
		.error( function(){
			console.log('Problem z połączeniem do sql :/');
	});



	$scope.delete = function ( user, $index ) {

		if ( !confirm ( 'czy napewno usunac goscia?' ) )
			return false;

		//console.log( $scope.userss[$index] );

		$scope.users.splice( $index , 1 );
		// [który index, ile elementów, dodanie czegoś ]

		$http.post('api/admin/users/delete/' , {
			user : user
		}).error( function(){
			console.log('Błąd komunikacji z API');
		});

		//console.log( users );
	};

}]);



controllersAdmin.controller('userEdit', ['$scope', '$http', '$routeParams', '$timeout', function($scope, $http, $routeParams, $timeout){

		var userId = $routeParams.id;
		$scope.id = userId;

		$http.get('api/admin/users/get/' + userId)

			.success( function(data){
				$scope.user = data;
				// console.log(data);
			})
			.error( function(){
				console.log('Błąd komunikacji z api :/');
		});

		$scope.saveChanges = function ( user ) {

			$http.post('api/admin/users/update/' , {

				user : user,
				id : userId,
				name : user.name,
				email : user.email,
				password : user.password,
				passconf : user.passconf

				}).success( function( errors ){

					$scope.success = true;

					if ( errors )
					{
						$scope.errors = errors;
					}
					else
					{
						$scope.success = true;

						// timeout to serwis angulara, do opóźnien, rejestrowany troche wyżej...

						$timeout(function(){
							$scope.success = false;
							$scope.product = {};
						} , 3000 );
					}					

				})
				.error( function(){
					console.log('problem z popraniem danych bazy sql :/');
			});


			// console.log( user );
			// console.log( id );
		};


	// console.log($scope.users[2].opis);

}]);


controllersAdmin.controller('userCreate', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){

		///zeby defaultowo zaznaczony byl user
		$scope.user = {};
		$scope.user.role = 'user';
		

		$scope.createUser = function ( user ) {
			$http.post('api/admin/users/create/' , {

				// co przekazujemy i pod jaka postacia
				user : user,
				name : user.name,
				email : user.email,
				password : user.password,
				passconf : user.passconf

				// pobieramy errors z formularza modelu users.php
				}).success( function( errors ){

					$scope.submit = true;
					
					if ( errors )
					{
						$scope.errors = errors;
					}
					else
					{
						// czysci bledy zeby nie wisialy ciagle
						$scope.errors = {};
						
						$scope.success = true;
						$timeout(function(){
							$scope.success = false;
							// żeby się wyczyscily pola
							$scope.user = {};
						} , 3000 );
					}

				}).error( function(){
					console.log('Błąd komunikacji z API');
			});
		};

	// console.log($scope.products[2].opis);

}]);


controllersAdmin.controller('orders', ['$scope', '$http', function($scope, $http){

	$http.get('model/orders.json')
		.success( function(data){
			$scope.orders = data;
		})
		.error( function(){
			console.log('Problem pobierania z JSONa :/');
	});
	

	$scope.delete = function ( user, $index ) {
		if ( !confirm( 'Czy na pewno chcesz usunąć to zdjęcie' ) )
			return false;

		$scope.orders.splice( $index , 1 );

		// TODO: przesłać dane przez API
	};

	$scope.changeStatus = function ( order ) {

		if (order.status == 0) 
			order.status = 1;
		else
			order.status = 0;
		
		//console.log(order.status);
	};
	
}]);

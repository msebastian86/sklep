'use strict';

var controllersAdmin = angular.module('controllersAdmin', [ 'angularFileUpload' , 'myDirectives' ]);

controllersAdmin.controller('products', ['$scope', '$http', function($scope, $http){

		$http.get('api/admin/products/get')
			.success( function(data){
				$scope.products = data;
			})
			.error( function(){
				console.log('lipa z połączeniem do sql :/');
		});

		$scope.delete = function ( product, $index ) {

			if ( !confirm ( 'czy napewno usunac produkt?' ) )
				return false;
			
			$scope.products.splice( $index , 1 );
			// [który index, ile elementów, dodanie czegoś ]
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
        			console.log('cos sie zjebał JSON :/');
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
			console.log('lipa z połączeniem do sql :/');
	});



	$scope.delete = function ( user, $index ) {

		if ( !confirm ( 'czy napewno usunac goscia?' ) )
			return false;

		//console.log( $scope.userss[$index] );

		$scope.users.splice( $index , 1 );
		// [który index, ile elementów, dodanie czegoś ]

		//console.log( users );
	};

}]);

controllersAdmin.controller('userEdit', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


		$http.post('model/users.json')

			.success( function(data){
				var users = data;
				$scope.user = users[id];
			})
			.error( function(){
				console.log('cos sie zjebał JSON :/');
		});

		$scope.saveChanges = function ( user ) {
			console.log( user );
			console.log( id );
		};

	// console.log($scope.users[2].opis);

}]);


controllersAdmin.controller('userCreate', ['$scope', '$http', function($scope, $http){


		$scope.createUser = function () {
			// TODO połączyć z API
			console.log( $scope.user );
		};

	// console.log($scope.products[2].opis);

}]);


controllersAdmin.controller('orders', ['$scope', '$http', function($scope, $http){

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
		
		//console.log(order.status);
	};
	
}]);

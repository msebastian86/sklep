
'use strict';

var myServices = angular.module('myServices', []);

// factory są dostepne w dowolnym kontrolerze

myServices.factory( 'cartSrv', [ 'store' , function( store ) {

	if ( store.get( 'cart' ) )
		var cart = store.get( 'cart' );
	else
		var cart = [];

	cart.show = function(){
		return cart;
	};

	cart.add = function ( product ) {

		if ( !cart.length )
		{
			product.qty = 0;
			cart.push( product );
		}

		var addNew = true;

		angular.forEach( cart, function( value, key ){

			if ( value.name == product.name )
			{
				addNew = false;
				cart[key].qty++;
			}

		});

		if ( addNew )
		{
			product.qty = 1;
			cart.push( product );
		}

		//tore.set( 'cart', cart );
		console.log( cart );
	};

	cart.empty = function () {
		store.remove('cart');
		cart.length = 0;
	};

	return cart;

}]);
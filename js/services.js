
'use strict';

var myServices = angular.module('myServices', []);

// factory są dostepne w dowolnym kontrolerze

myServices.factory( 'cart', [ 'store' , function(store) {

	var cart = [];

	cart.show = function(){
		console.log('zaw koszyka');
	};

	return cart;

}]);
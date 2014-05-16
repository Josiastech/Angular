// Wrapping JavaSctip in closures is a Good Habit! ;)
(function(){
	var gem = {name: 'Azurite', price: 2.95, description: 'Prod. Descriptcion', canPurchase: false};
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.product = gem;
	});
})();

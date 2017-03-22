(function(){

	angular
		.module("restModule")
		.controller("menuCtrller", menuCtrller);

		function menuCtrller(menu, restauranat){
			var mc = this;
			mc.menu = menu.results[0];
			mc.restaurant = restauranat;
			console.log(mc.restaurant);

		}

})();
(function(){

	"use strict"


	angular
		.module("restModule")
		.factory("restService", restService);

		function restService($resource){
			var url = "http://localhost:3000/api/restaurants/:menus"

			return $resource(url, null);
		}


})();
(function(){

	angular
		.module("restModule")
		.config(Config);


		function Config($stateProvider){

			$stateProvider
				.state("main.restlist", {
					url : "/restlist/:cuisine",
					views : {
						"content" : {
							templateUrl : "app/components/restaurant/view.restlist.html",
							controller : "restCtrl",
							controllerAs : "rl",
							resolve : {
								restlist : getRestList
							} 
						}
					} 
				})


		function getRestList(restService, $stateParams){
			 var params = {
			 	filter : {'cuisine' : $stateParams.cuisine},
			 	sort : "rating",
			 	sortDirection : "desc",
			 	page : 1,
			 	pageSize : 12,
			 }



			return restService.get(params).$promise;
		}		


		}

})()
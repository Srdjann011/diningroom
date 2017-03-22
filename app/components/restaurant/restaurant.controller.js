(function(){
	"use strict"

	angular
		.module("restModule")
		.controller("restCtrl", restCtrl);

		function restCtrl($scope, restlist, restService, $stateParams, $uibModal){
		var rl = this;
		rl.restlist = restlist.results;
		rl.sort = "rating";
		rl.sortDirection = "desc";
		rl.page = 1;
		rl.pageSize = 12;
		rl.numberOfpages = Math.ceil(restlist.count/rl.pageSize);
		rl.filter = {
			priceFrom : 1,
			priceTo : 5
		}
		rl.loadModal = function(restaurant){
			$uibModal.open({
				templateUrl : "app/components/restaurant/menu.html",
				controller : "menuCtrller",
				controllerAs : "mc", 
				resolve : {
					menu : function(){
						return restService.get({id : restaurant._id} , {menus : "menus"}).$promise;

					},
					restauranat : function(){
						return restaurant;
					}
				}

			});

			}
		
		
		rl.pages = ["<"];

		for (var i = 1; i <= rl.numberOfpages; i++) {
			rl.pages.push(i);
		}
		rl.pages.push(">");


		rl.changePage = function(i){
			
			if(i == "<" && rl.page == 1 ){
				rl.page = 1;
			}else if(i == ">" && rl.page == rl.numberOfpages){
				rl.page == rl.numberOfpages;
			}else if(i == "<"){
				rl.page -=1; 
			}else if(i ==">"){
				rl.page +=1
			}else{
				rl.page = i;

			}
			
			getRestaurants();

		}
	
		$scope.$watch('rl.filter.priceFrom', function(){
				getRestaurants();
		});
		$scope.$watch('rl.filter.priceTo', function(){
				getRestaurants();
		});


		function getRestaurants(){
			
			var params = {
				sort : rl.sort,
				sortDirection : rl.sortDirection,
				page : rl.page,
				pageSize : rl.pageSize,
				filter : {
				'cuisine' : $stateParams.cuisine,
					priceFrom : rl.filter.priceFrom,
					 priceTo : rl.filter.priceTo}
				
			}

			restService.get(params).$promise.then(function(data){
				rl.restlist = data.results;
				
			})
		}		

		}
})();
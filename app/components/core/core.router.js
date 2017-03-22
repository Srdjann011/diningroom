(function(){

	angular
		.module("coreModule")
		.config(Config);


		function Config($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/home");
			$stateProvider
				.state("main", {
					abstract : true,
					views : {
						"header" : {
							templateUrl : "app/components/core/view.header.html"
						}
					}
				})
				.state("main.home", {
					url : "/home",
					views : {
						"content" : {
							templateUrl : "app/components/core/view.home.html"
						}
					} 
				})
				.state("main.about", {
					url : "/about",
					views : {
						"content" : {
							templateUrl : "app/components/core/view.about.html"
						}
					} 
				});



		}


})();
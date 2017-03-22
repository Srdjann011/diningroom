(function(){

	angular
		.module("ratingModule")
		.directive("ratingDirective", ratingDirective);

		function ratingDirective(){

			return {
				restrict : "E",
				templateUrl : "app/components/shared/view.rating.html",
				scope : {
					rating : "=",
					price : "="
				},
				link : function(scope){
					//stars - rating
					scope.arr = [];
					scope.earr = [];
					var estarLenght = 5 - scope.rating;
					for(var i = 1; i <= scope.rating; i++){
						scope.arr.push(i);
					}
					for(var i = 1; i <= estarLenght; i++){
						scope.earr.push(i);
					}
					//coins - rating
					scope.arrc = [];
					scope.earrc = [];
					var epriceLenght = 5 - scope.price;
					for(var i = 1; i <= scope.price; i++){
						scope.arrc.push(i);
					}
					for(var i = 1; i <= epriceLenght; i++){
						scope.earrc.push(i);
					}
				}




			}



		}


})();
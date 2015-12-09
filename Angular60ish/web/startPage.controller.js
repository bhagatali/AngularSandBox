(function(){
	var app = angular.module('myModule',[]);
	app.controller("SimpleController", function($scope) {
		$scope.customers=[
		             		{name:'Minal Menghani',city:'Mumbai',balance:25},
		  					{name:'Ayaan Bhagat',city:'Portsmouth',balance:50},
		  					{name:'Ali Bhagat',city:'Chennai',balance:75}
		  				 ];
	})	
})
var app = angular.module("moduleDI",[]);

app.controller("myController", function($scope,$http) {
	$http.get('https://api.github.com/users/bhagatali/repos')
		 .success(function(repos) {
				$scope.NFL = [{Player:'Tom Brady', Position: 'QB', Team: "New England Patriots", Yards: 3912 },
			                   {Player:'Adrian Peterson', Position: 'RB', Team: "Minnesota Vikings", Yards: 1182 },
			                   {Player:'Julio Jones', Position: 'WR', Team: "Atlanta Falcons", Yards: 1338 }
			                   ];
				$scope.displayThis = "Who is going to the Super Bowl?"
				$scope.myRepos = repos;
		 	
		 })
})

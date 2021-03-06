var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};
	$scope.date = new Date();

	$http.get('/api/todos')
		.success(function(data){
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error :" + data);
		});

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data){
				$scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
			})
			.error(function(data){
				console.log("Error :" + data);
			});
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data){
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data){
				console.log("Error :" + data);
			});
	}
}
angular.module('wireStorm', []).

controller('productsCtrl', function($scope, $http) {
	var url = 'http://0.0.0.0:3000/api';

	$http.get(url+'/products').then(function(response) {
		console.log(response.data);
		$scope.products = response.data;
	});	
	

	$scope.submit = function(comment, id) {
		console.log('form text: '+ comment);
		$http.post(url+'/products/' + id + '/comments', {text: comment }).then(function() {
			$scope.getComments(id);
		});
	}

	$scope.getComments = function(id) {
		console.log('getting comments');
		$http.get(url + '/products/' + id + '/comments').then(function(response) {
			$scope.comments = angular.copy(response.data);
		});
	}
});
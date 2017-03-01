angular.module('mainCtrl', [])

	.controller('mainController', function($scope, $http, Comment) {
		// object to hold all the data for the new comment form
		$scope.commentData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = true;
		
		// get all the comments first and bind it to the $scope.comments object
		Comment.get()
			.success(function(data) {
				console.log(data);
				$scope.comments = data;
				$scope.loading = false;
			});



		$scope.title = "title";
		$scope.title2 = "title2";



		//angular.element(document.getElementById('wrapper')).append('<directive-arguments title='+$scope.title+' title2='+$scope.title2+' ></directive-arguments>');

		// function to handle submitting the form
		$scope.submitComment = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			Comment.save($scope.commentData)
				.success(function(data) {
					$scope.commentData = {};
					// if successful, we'll need to refresh the comment list
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});

				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		$scope.deleteComment = function(id) {
			$scope.loading = true; 

			Comment.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});

				});
		};

	})
	.directive('directiveA', function() {

	/* Template-expanding directive */
	return {
		restrict: 'A',
		template: 'restriction A , restriction by an element attribute'
	};
}).directive('directiveE', function() {

	/* Template-expanding directive */
	return {
		restrict: 'E',
		template: 'restriction E , restriction  by element name'
	};
}).directive('directiveName', function(){
	return {
		restrict:'E',
		transclude:true,
		scope: {
			content: '='

		},
		template:'restriction E with arguments : {{content}}  '
	};

}).directive('directiveC', function(){
	return {
		restrict:'C',
		template:'restriction C '
	};

}).directive('directiveArgs', function() {

	/* directive args */
	return {

		link: function (scope, element, attrs) {
			//convert the attributes to object and get its properties
			var attributes = scope.$eval(attrs.directiveArgs);
			console.log('id:'+attributes.id);
			console.log('id:'+attributes.name);
			angular.element(document.getElementById('directive-args')).append('directive A ,with args : id : '+attributes.name);
		}
	};
});

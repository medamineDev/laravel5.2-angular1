angular.module('mainCtrl', [])


    .controller('mainController', function ($scope, $http, Comment,sharedData,$rootScope) {
        // object to hold all the data for the new comment form
        $scope.commentData = {};

        // loading variable to show the spinning loading icon
        $scope.loading = true;

        // get all the comments first and bind it to the $scope.comments object
        Comment.get()
            .success(function (data) {
                console.log(data);
                $scope.comments = data;
                $scope.loading = false;
            });

        $scope.userName  =  sharedData.getData();

        $scope.$watch('userName', function (newValue, oldValue) {

            //$scope.userName2  =  sharedDataService.getData();
           // $scope.userName  =  newValue;
           // if (newValue !== oldValue) $scope.userName  =  sharedDataService.getData();

        });

        $scope.title = "title";
        $scope.title2 = "title2";

        // function to handle submitting the form
        $scope.submitComment = function () {
            $scope.loading = true;

            // save the comment. pass in comment data from the form
            Comment.save($scope.commentData)
                .success(function (data) {
                    $scope.commentData = {};
                    // if successful, we'll need to refresh the comment list
                    Comment.get()
                        .success(function (getData) {
                            $scope.comments = getData;
                            $scope.loading = false;
                        });

                })
                .error(function (data) {
                    console.log(data);
                });
        };

        // function to handle deleting a comment
        $scope.deleteComment = function (id) {
            $scope.loading = true;

            Comment.destroy(id)
                .success(function (data) {

                    // if successful, we'll need to refresh the comment list
                    Comment.get()
                        .success(function (getData) {
                            $scope.comments = getData;
                            $scope.loading = false;
                        });

                });
        };

    });


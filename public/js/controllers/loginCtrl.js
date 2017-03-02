angular.module('loginCtrl', [])


.controller("loginController", function ($scope) {


        $scope.userName = 'test';

        /*        $scope.$watch('userName', function (newValue, oldValue) {
         if (newValue !== oldValue){



         }
         sharedDataService.setData(newValue);

         });*/

        $scope.checkUserName = function (userName) {


            // sharedDataService.setData(userName);
     

        }

    });

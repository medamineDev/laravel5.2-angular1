
angular.module('sharedService', [])

    .factory('sharedData', function() {

        var sharedData = {
            userName: ''
        };
        return {
            setData : function(data) {

                console.log("set  -> "+sharedData.userName);
                sharedData.userName = data;
            },
            getData : function() {

                console.log("get -> "+sharedData.userName);
                return sharedData.userName;
            }
        }

    });
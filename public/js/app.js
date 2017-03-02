var commentApp = angular.module('commentApp', ['mainCtrl','loginCtrl', 'commentService','sharedService','directivesModule'],function($interpolateProvider){

    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

});
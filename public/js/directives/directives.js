
angular.module('directivesModule', [])
    
.directive('directiveA', function () {

    /* Template-expanding directive */
    return {
        restrict: 'A',
        template: 'restriction A , restriction by an element attribute'
    };
})
    .directive('directiveE', function () {

    /* Template-expanding directive */
    return {
        restrict: 'E',
        template: 'restriction E , restriction  by element name'
    };
})
    .directive('directiveName', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            content: '='

        },
        template: 'restriction E with arguments : {{content}}  '
    };

})
    .directive('directiveC', function () {
    return {
        restrict: 'C',
        template: 'restriction C '
    };

}).directive('directiveArgs', function () {
    /* directive args */
    return {

        link: function (scope, element, attrs) {
            //convert the attributes to object and get its properties
            var attributes = scope.$eval(attrs.directiveArgs);
            console.log('id:' + attributes.id);
            console.log('id:' + attributes.name);
            angular.element(document.getElementById('directive-args')).append('directive A ,with args : id : ' + attributes.name);
        }
    };
});
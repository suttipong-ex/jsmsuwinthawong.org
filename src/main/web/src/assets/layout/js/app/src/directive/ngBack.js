/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.directive('ngBack', [
    '$window',
    function ($window) {
        return function (scope, element, attrs) {
            
            element.bind('click', function (event) {
                scope.$apply(function () {
                    $window.history.back();
                });

                event.preventDefault();
            });
            
        };
    }
]);
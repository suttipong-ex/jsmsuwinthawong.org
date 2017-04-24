/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/10
 */
app.config([
    '$locationProvider',
    '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

    }
]);
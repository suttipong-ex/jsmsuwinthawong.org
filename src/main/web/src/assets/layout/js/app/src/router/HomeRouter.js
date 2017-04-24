/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/10
 */
app.config([
  'patentdesign',
  '$stateProvider',
  function (patent, $stateProvider) {

    var loaded = {
      'home': false
    };

    var timeout = setTimeout(function () {
      clearTimeout(timeout);
      angular.forEach(
              loaded,
              function (value, key) {
                loaded[key] = true;
              }
      );
    }, 500);

    var resolver = {
      initData: [
        '$q',
        '$timeout',
        function ($q, $timeout) {

          var defer = $q.defer();
          $timeout(function () {
            defer.resolve(null);
          });

          return defer.promise;
        }
      ]
    };

    $stateProvider
            .state('home', {
              url: '',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['home']) {
                      return null;
                    }

                    return patent.config.host + '/template/home';
                  },
                  resolve: resolver,
                  controller: [
                    '$scope',
                    'initData',
                    function ($scope, initData) {

                    }
                  ]
                }
              }
            });
  }
]);
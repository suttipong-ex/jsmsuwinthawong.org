/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/18
 */
app.config([
  'patentdesign',
  '$stateProvider',
  function (patent, $stateProvider) {

    var loaded = {
      'form/1': false
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

    var form1Resolver = {
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
            .state('form/1', {
              url: '/form/1',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['form/1']) {
                      return null;
                    }

                    return patent.config.host + '/template/form/1';
                  },
                  resolve: form1Resolver,
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
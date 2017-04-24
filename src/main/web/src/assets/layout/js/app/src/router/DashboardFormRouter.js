/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/10
 */
app.config([
  'patentdesign',
  '$stateProvider',
  function (patent, $stateProvider) {

    var loaded = {
      'dashboard/form/all': false,
      'dashboard/form/draft': false,
      'dashboard/form/send': false
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

    var allResolver = {
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

    var draftResolver = {
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

    var sendResolver = {
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
            .state('dashboard/form/all', {
              url: '/dashboard/form',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['dashboard/form/all']) {
                      return null;
                    }

                    return patent.config.host + '/template/dashboard/form';
                  },
                  resolve: allResolver,
                  controller: [
                    '$scope',
                    'initData',
                    function ($scope, initData) {

                    }
                  ]
                }
              }
            })
            .state('dashboard/form/draft', {
              url: '/dashboard/form/draft',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['dashboard/form/draft']) {
                      return null;
                    }

                    return patent.config.host + '/template/dashboard/form/draft';
                  },
                  resolve: draftResolver,
                  controller: [
                    '$scope',
                    'initData',
                    function ($scope, initData) {

                    }
                  ]
                }
              }
            })
            .state('dashboard/form/send', {
              url: '/dashboard/form/send',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['dashboard/form/send']) {
                      return null;
                    }

                    return patent.config.host + '/template/dashboard/form/send';
                  },
                  resolve: sendResolver,
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
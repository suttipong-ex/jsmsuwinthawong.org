/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/04
 */
app.config([
  '$httpProvider',
  function ($httpProvider) {

    $httpProvider.interceptors.push([
      'csrfToken',
      function (csrfToken) {

        return {
          request: function (config) {

            config.headers['X-XSRF-TOKEN'] = csrfToken;

            return config;
          }
        };

      }
    ]);
  }
]);  
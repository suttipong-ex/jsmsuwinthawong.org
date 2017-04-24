/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.config([
  '$httpProvider',
  function ($httpProvider) {

    $httpProvider.interceptors.push([
      '$q',
      'validator.UIFieldValidator',
      function ($q, UIFieldValidator) {
        
        function isValidateFail(err){
          return err.type === 'ValidatedFailError';
        }

        function mapErrByFieldName(err) {
          UIFieldValidator.showError(err.field, err.code, err.message);
        }

        function mapErrByCode(err) {
          UIFieldValidator.showErrorByCode(err.code, err.message);
        }

        return {
          responseError: function (rejection) {
            var err = rejection.data;
            if (isValidateFail(err)) {
              angular.forEach(err.field_errors, mapErrByFieldName);
              angular.forEach(err.errors, mapErrByCode);
            }

            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('util.PasswordStarGenerator', [
  'util.StringUtils',
  function (StringUtils) {

    var hasText = StringUtils.hasText;

    /**
     * class PasswordStarGenerator
     */
    var PasswordStarGenerator = function () {
      throw new Error('Unsupported new instance.');
    };

    /**
     * @param {String} password
     * @return {String}
     */
    PasswordStarGenerator.generate = function (password) {
      if (!hasText(password)) {
        return '';
      }

      var output = '';
      var length = password.length;
      for (var i = 0; i < length; i++) {
        output = output + '*';
      }

      return output;
    };

    return PasswordStarGenerator;
  }
]);
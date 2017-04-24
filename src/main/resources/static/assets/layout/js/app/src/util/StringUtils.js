/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('util.StringUtils', [
  function () {

    var StringUtils = function () {
      throw new Error('Unsupported new instance.');
    };

    /**
     * @param {String} str
     * @return {Boolean}
     */
    StringUtils.hasText = function (str) {
      if (!str) {
        return false;
      }

      return (str + '').length > 0;
    };

    return StringUtils;
  }
]);
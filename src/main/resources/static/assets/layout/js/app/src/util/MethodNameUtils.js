/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
app.factory('util.MethodNameUtils', [
  'util.StringUtils',
  function (StringUtils) {

    var hasText = StringUtils.hasText;

    var MethodNameUtils = function () {
      throw new Error('Unsupported new instance.');
    };

    /**
     * @param {String} name
     * @return {String}
     */
    MethodNameUtils.toGetterName = function (name) {

      if (!hasText(name)) {
        throw new Error('require name.');
      }

      if (name.length === 1) {
        return 'get' + name[0].toUpperCase();
      }

      return 'get' + name[0].toUpperCase() + name.substring(1);
    };

    return MethodNameUtils;
  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
app.factory('util.JSTypeUtils', [
  function () {

    var JSTypeUtils = function () {
      throw new Error('Unsupported new instance.');
    };

    /**
     * @param {Any} any
     * @return {String}
     */
    JSTypeUtils.typeOf = function (any) {
      return Object.prototype
              .toString
              .call(any)
              .split(/.*\s(.*?)\]/)[1];
    };

    return JSTypeUtils;
  }
]);
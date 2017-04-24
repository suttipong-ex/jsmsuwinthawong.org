/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/11/29
 */
app.factory('logger.Logger', [
  function () {
    /**
     * @param {String} moduleName
     * @returns {Logger}
     */
    return function (moduleName) {

      /**
       * class Logger
       */
      var Logger = function () {
        this.moduleName = moduleName;
      };

      function getMessageTitle(type) {
        return type + ' [' + moduleName + '] : ';
      }

      if (window.console) {
        Logger.prototype.info = window.console.info.bind(window.console, getMessageTitle('INFO'));
        Logger.prototype.debug = window.console.debug.bind(window.console, getMessageTitle('DEBUG'));
        Logger.prototype.warn = window.console.warn.bind(window.console, getMessageTitle('WARN'));
        Logger.prototype.error = window.console.error.bind(window.console, getMessageTitle('ERROR'));
      } else {
        Logger.prototype.info = function () { };
        Logger.prototype.debug = function () { };
        Logger.prototype.warn = function () { };
        Logger.prototype.error = function () { };
      }

      return Logger;
    };
  }
]);

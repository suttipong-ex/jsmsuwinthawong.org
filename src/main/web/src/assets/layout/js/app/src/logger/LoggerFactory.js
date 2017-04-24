/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/11/29
 */
app.factory('logger.LoggerFactory', [
  'logConfig',
  'logger.Logger',
  function (config, Logger) {


    var enabledInfo = config ? config.enabledInfo : true;
    var enabledDebug = config ? config.enabledDebug : true;
    var enabledWarn = config ? config.enabledWarn : true;
    var enabledError = config ? config.enabledError : true;

    /**
     * class LoggerFactory
     */
    var LoggerFactory = function () {
      throw new Error('Unsupported new instance.');
    };

    /**
     * @param {String} moduleName
     * @returns {Logger} log
     */
    LoggerFactory.getLogger = function (moduleName) {
      var log = new (Logger(moduleName));

      if (!enabledInfo) {
        log.info = function () {};
      }

      if (!enabledDebug) {
        log.debug = function () {};
      }

      if (!enabledWarn) {
        log.warn = function () {};
      }

      if (!enabledError) {
        log.error = function () {};
      }

      return log;
    };

    return LoggerFactory;
  }
]);

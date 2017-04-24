/* 
 * Copy right 2016 - 2017 Genius-Tree Co., Ltd.
 */

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/11/29
 */
var app = angular.module('app', [
  'ui.bootstrap',
  'ipCookie',
  'ui.router',
  'ngAnimate',
  'ui-notification',
  'ngSanitize'
]);

app.constant('patentdesign', window.patentdesign);
app.constant('logConfig', window.logConfig);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.factory('component.AjaxLoadingDialog', [
  'component.Dialog',
  function (Dialog) {

    /**
     * class AjaxLoadingDialog
     */
    var AjaxLoadingDialog = function () {
      Dialog.call(this, 'ajaxLoadingDialog');
      this.cssClassName = 'dip--dialog--ajax-loading';
    };

    angular.extend(AjaxLoadingDialog.prototype, Dialog.prototype);

    /**
     * @return {AlertDialog} dialog instance
     */
    AjaxLoadingDialog.create = function () {
      return new AjaxLoadingDialog();
    };

    /**
     * @param {String} message
     * @return {AlertDialog} dialog instance
     */
    AjaxLoadingDialog.prototype.setMessage = function (message) {
      this.data.message = message;
      return this;
    };

    return AjaxLoadingDialog;
  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('component.AlertDialog', [
  'component.Dialog',
  function (Dialog) {

    /**
     * class AlertDialog
     */
    var AlertDialog = function () {
      Dialog.call(this, 'alertDialog');
      this.data.buttonLabel = 'ตกลง';
      this.cssClassName = 'dip--dialog--alert';
    };

    angular.extend(AlertDialog.prototype, Dialog.prototype);

    /**
     * @return {AlertDialog} dialog instance
     */
    AlertDialog.create = function () {
      return new AlertDialog();
    };

    /**
     * @param {String} title
     * @return {AlertDialog} dialog instance
     */
    AlertDialog.prototype.setTitle = function (title) {
      this.data.title = title;
      return this;
    };

    /**
     * @param {String} message
     * @return {AlertDialog} dialog instance
     */
    AlertDialog.prototype.setMessage = function (message) {
      this.data.message = message;
      return this;
    };

    /**
     * @param {String} buttonLabel
     * @return {AlertDialog} dialog instance
     */
    AlertDialog.prototype.setButtonLabel = function (buttonLabel) {
      this.data.buttonLabel = buttonLabel;
      return this;
    };

    return AlertDialog;
  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('component.ConfirmDialog', [
  'component.Dialog',
  function (Dialog) {

    /**
     * class ConfirmDialog
     */
    var ConfirmDialog = function () {
      Dialog.call(this, 'confirmDialog');
      this.data.cancelButtonLabel = 'ยกเลิก';
      this.data.confirmButtonLabel = 'ยืนยัน';
      this.cssClassName = 'dip--dialog--confirm';
    };

    angular.extend(ConfirmDialog.prototype, Dialog.prototype);

    /**
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.create = function () {
      return new ConfirmDialog();
    };

    /**
     * @param {String} title
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.setTitle = function (title) {
      this.data.title = title;
      return this;
    };

    /**
     * @param {String} message
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.setMessage = function (message) {
      this.data.message = message;
      return this;
    };

    /**
     * @param {String} buttonLabel
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.setCancelButtonLabel = function (buttonLabel) {
      this.data.cancelButtonLabel = buttonLabel;
      return this;
    };

    /**
     * @param {String} buttonLabel
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.setConfirmButtonLabel = function (buttonLabel) {
      this.data.confirmButtonLabel = buttonLabel;
      return this;
    };

    /**
     * @param {Function} callback
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.onConfirm = function (callback) {
      this.onClose(function (button) {
        if (button === 'CONFIRM') {
          if (callback) {
            callback(button);
          }
        }
      });
      return this;
    };

    /**
     * @param {Function} callback
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.onCancel = function (callback) {
      this.onClose(function (button) {
        if (button !== 'CONFIRM') {
          if (callback) {
            callback(button);
          }
        }
      });
      return this;
    };

    /**
     * @param {Function} callback
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.onAsyncConfirm = function (callback) {
      this.onAsyncClose(function ($dialog, button) {
        if (button === 'CONFIRM') {
          if (callback) {
            callback($dialog, button);
          }
        } else {
          $dialog.close(button);
        }
      });
      return this;
    };

    /**
     * @param {Function} callback
     * @return {ConfirmDialog} dialog instance
     */
    ConfirmDialog.prototype.onAsyncCancel = function (callback) {
      this.onAsyncClose(function ($dialog, button) {
        if (button !== 'CONFIRM') {
          if (callback) {
            callback($dialog, button);
          }
        } else {
          $dialog.close(button);
        }
      });
      return this;
    };

    return ConfirmDialog;
  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/09
 */
app.factory('component.Dialog', [
  '$uibModal',
  function ($uibModal) {

    /**
     * class Dialog
     * 
     * @param {String} templateId 
     */
    var Dialog = function (templateId) {
      this.templateId = templateId;
      this.data = {_ajaxLoadingShow: false};
      this.closeCallbacks = [];
      this.cssClassName = '';
      this.$dialog = null;
    };

    /**
     * @param {String} templateId
     * @return {Dialog} dialog instance
     */
    Dialog.fromTemplateId = function (templateId) {
      return new Dialog(templateId);
    };

    /**
     * @param {Object} data 
     * @return {Dialog} dialog instance
     */
    Dialog.prototype.withData = function (data) {
      this.data = data;
      return this;
    };

    /**
     * @param {Object} cssClassName
     * @return {Dialog} dialog instance
     */
    Dialog.prototype.withCssClassName = function (cssClassName) {
      this.cssClassName = cssClassName;
      return this;
    };

    /**
     * @param {Function} callback
     * @return {Dialog} dialog instance
     */
    Dialog.prototype.onAsyncClose = function (callback) {
      this.closeCallbacks.push(callback);
      return this;
    };

    /**
     * @param {Function} callback
     * @return {Dialog} dialog instance
     */
    Dialog.prototype.onClose = function (callback) {
      this.onAsyncClose(function ($dialog, button) {
        $dialog.close(button);
        if (callback) {
          callback(button);
        }
      });
      return this;
    };

    function ProxyHideAjaxLoading(closeFunc, data) {
      return function () {
        data._ajaxLoadingShow = false;
        return closeFunc.apply(this, arguments);
      };
    }

    /**
     * open target dialog by template id
     */
    Dialog.prototype.open = function () {
      var $this = this;
      $this.$dialog = $uibModal.open({
        templateUrl: this.templateId,
        windowClass: 'white-overlay ' + ' ' + (this.cssClassName ? this.cssClassName : ''),
        backdrop: false,
        keyboard: false,
        controller: function ($scope) {

          $scope.data = $this.data;
          var hasCloseCallback = !!$this.closeCallbacks.length;

          $scope.close = function (button) {
            if (hasCloseCallback) {
              $this.data._ajaxLoadingShow = true;
              var length = $this.closeCallbacks.length;
              for (var i = 0; i < length; i++) {
                $this.closeCallbacks[i]($this.$dialog, button);
              }
            } else {
              $this.$dialog.close(button);
            }
          };

        }
      });

      $this.$dialog.close = (ProxyHideAjaxLoading)($this.$dialog.close, this.data);

      return $this;

    };

    Dialog.prototype.close = function () {
      if (this.$dialog) {
        this.$dialog.close();
      }
    };

    return Dialog;
  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.factory('component.Notification', [
  'Notification',
  function (Noti) {

    /**
     * @component Notification
     */
    var Notification = function () {
      this.title = null;
      this.message = null;
    };

    /**
     * @returns {Notification}
     */
    Notification.create = function () {
      return new Notification();
    };

    /**
     * @param {String} title
     * @returns {Notification}
     */
    Notification.prototype.setTitle = function (title) {
      this.title = title;
      return this;
    };

    /**
     * @param {String} message
     * @returns {Notification}
     */
    Notification.prototype.setMessage = function (message) {
      this.message = message;
      return this;
    };

    Notification.prototype.show = function () {
      Noti({
        title: this.title,
        message: this.message
      });
    };

    return Notification;
  }
]);
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
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.config([
    'NotificationProvider',
    function (NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 40,
            startRight: 30,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'bottom'
        });
    }
]);
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

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.directive('ngBack', [
    '$window',
    function ($window) {
        return function (scope, element, attrs) {
            
            element.bind('click', function (event) {
                scope.$apply(function () {
                    $window.history.back();
                });

                event.preventDefault();
            });
            
        };
    }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
app.factory('enum.Enumerate', [
  'util.StringUtils',
  'util.MethodNameUtils',
  function (StringUtils, MethodNameUtils) {

    var hasText = StringUtils.hasText;
    var isArray = angular.isArray;
    var isObject = angular.isObject;
    var isString = angular.isString;
    var forEach = angular.forEach;

    /*
     * Example 1
     * ---------
     * 
     * var ArticleStatus = Enumerate([
     *     {
     *         name: 'PUBLISHED',
     *         description: 'published'
     *     },
     *     {
     *         name: 'DRAFT',
     *         description: 'draft'
     *     }
     * ]);
     * 
     * Using
     * 
     * ArticleStatus.PUBLISHED
     * ArticleStatus.PUBLISHED.getName()
     * ArticleStatus.PUBLISHED.getDescription()
     * 
     * ArticleStatus.DRAFF
     * ArticleStatus.DRAFF.getName()
     * ArticleStatus.DRAFF.getDescription()
     * 
     * =========================================
     * 
     * Example 2
     * ---------
     * 
     * var LikeRefType = Enumerate([
     *     'POST',
     *     'COMMENT'
     * ]);
     * 
     * Using
     * 
     * LikeRefType.POST
     * LikeRefType.POST.getName()
     * LikeRefType.COMMENT
     * LikeRefType.COMMENT.getName()
     */

    return (function (values, optional) {

      if (!isArray(values)) {
        throw new Error('invalid arguments type, require Array.');
      }

      if (values.length < 1) {
        throw new Error('require values.');
      }

      /**
       * enum Enumerate
       *
       * @param {String | Object} value 
       */
      var Enumerate = function (value) {

        this.name = null; /* String */

        if (isObject(value)) {
          initObject.call(this, value);
          return;
        }

        if (isString(value)) {
          this.name = value;
          return;
        }

        throw new Error('invalid arguments.');
      };

      function initObject(value) {
        if (!hasText(value.name)) {
          throw new Error('require attribute name.');
        }

        forEach(value, function (val, attr) {
          this[attr] = val;
        }, this);
      }

      /**
       * keep all enums in this attributes
       */
      Enumerate._values = [];

      /**
       * @return {Array<Enumerate>}
       */
      Enumerate.values = function () {
        return Enumerate._values;
      };

      function findByName(values, name) {
        var e = null;
        forEach(values, function (val) {
          if (val.name === name) {
            e = val;
            return false;
          }
        });

        return e;
      }

      /**
       * @param {String} name
       * @returns {Enumerate}
       */
      Enumerate.valueOf = function (name) {

        var valid = hasText(name)
                && name !== 'null'
                && name !== 'undefined';

        if (!valid) {
          return null;
        }

        var e = findByName(Enumerate._values, name);
        if (!e) {
          throw new Error('not found enum of value "' + name + '".');
        }

        return e;
      };

      /**
       * @returns {String}
       */
      Enumerate.prototype.toString = function () {
        return this.name;
      };

      /**
       * @param {String | Enumerate} name 
       * @returns {Boolean}
       */
      Enumerate.prototype.is = function (name) {

        if (isString(name)) {
          return this.name === name;
        }

        return this === name;
      };

      optional && forEach(optional, function (val, attr) {
        Enumerate.prototype[attr] = val;
      });

      function getAttrNames(values) {
        var value = values[0];
        if (isString(value)) {
          return ['name'];
        }

        var attrs = [];
        forEach(value, function (value, attr) {
          attrs.push(attr);
        });

        var isNotFoundName = attrs.indexOf('name') === -1;
        if (isNotFoundName) {
          attrs.push('name');
        }

        return attrs;
      }

      var attrs = getAttrNames(values);
      forEach(attrs, function (attr) {
        var getter = MethodNameUtils.toGetterName(attr);
        Enumerate.prototype[getter] = function () {
          return this[attr];
        };
      });

      forEach(values, function (value) {
        var name = isObject(value) ? value.name : value;
        var e = findByName(Enumerate._values, name);
        if (!e) {
          e = new Enumerate(value);
          Enumerate._values.push(e);
        }

        Object.freeze(e);
        Enumerate[name] = e;
      });

      Object.freeze(Enumerate._values);
      Object.freeze(Enumerate);

      return Enumerate;
    });
  }
]);
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

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/04
 */
app.provider('csrfToken', [
  function () {

    var token = jQuery('meta[name=csrf_token]').attr('content');

    this.$get = function () {
      return token;
    };
  }
]);

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.provider('isomorphicState', [
  function () {

    var el = document.getElementById('iso-state');
    var dataState = angular.element(el).attr('data-state');
    var state = dataState ? JSON.parse(dataState) : null;

    this.$get = function () {
      return state;
    };
  }
]);

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
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/10
 */
app.config([
  'patentdesign',
  '$stateProvider',
  function (patent, $stateProvider) {

    var loaded = {
      'home': false
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

    var resolver = {
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
            .state('home', {
              url: '',
              views: {
                main: {
                  templateUrl: function () {

                    if (!loaded['home']) {
                      return null;
                    }

                    return patent.config.host + '/template/home';
                  },
                  resolve: resolver,
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
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/10
 */
app.config([
    '$locationProvider',
    '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

    }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.run(function () {
  if (window.patentdesign && window.patentdesign.config && window.patentdesign.config.enabledConsoleWarning) {
    console.log("%cคำเตือน!", "background-color : yellow; color : red; font-size : 18pt;");
    console.warn("%cอย่าเอาโค๊ด (code) ใด ๆ ที่คุณไม่เข้าใจมาวางในคอลโซล (console) นี้  ถ้าไม่อยากถูกแฮ็ค (hack)", 'font-size : 12pt;');
    console.warn("%cคอนโซลนี้มีไว้สำหรับนักพัฒนา (โปรแกรมเมอร์) เท่านั้น! ถ้าใครบอกให้ทำอะไรตรงคอลโซลนี้ ให้สันนิษฐานก่อนว่าคุณกำลังโดนหลอก", 'font-size : 12pt;');
  }
});
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.run(function () {
  jQuery(document).on(
          'keyup',
          '.dip--validate-error',
          function (event) {
            //if not key Enter
            if (event.keyCode !== 13) {
              var $el = $(this);
              var $parent = $el.parents('.form-group');
              $parent.removeClass('has-danger');
              $el.removeClass('form-control-danger');
              $el.removeClass('dip--validate-error');
              $el.siblings('.dip--validate-message').text('');
            }
          }
  );
});
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.run(function () {
  jQuery(document).on(
          'keydown',
          'input.form-control',
          function (e) {
            //if keyboard is 'enter'
            if (e.keyCode === 13) {
              jQuery('.dip--form__submit-button').click();
            }
          }
  );
});
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
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('util.NameBuilder', [
  'util.StringUtils',
  function (StringUtils) {

    var hasText = StringUtils.hasText;

    /**
     * class NameBuilder
     * 
     * @param {String} firstName 
     */
    var NameBuilder = function (firstName) {
      this.firstName = firstName;
      this.middleName = null;
      this.lastName = null;
    };

    /**
     * @param {String} firstName
     * @return {NameBuilder} instance
     */
    NameBuilder.fromFirstName = function (firstName) {
      return new NameBuilder(firstName);
    };

    /** 
     * @param {String} middleName
     * @return {NameBuilder}
     */
    NameBuilder.prototype.andMiddleName = function (middleName) {
      this.middleName = middleName;
      return this;
    };

    /** 
     * @param {String} lastName
     * @return {NameBuilder}
     */
    NameBuilder.prototype.andLastName = function (lastName) {
      this.lastName = lastName;
      return this;
    };

    /**
     * @return {String}
     */
    NameBuilder.prototype.build = function () {
      if (!hasText(this.firstName)) {
        this.firstName = '';
      }

      if (!hasText(this.middleName)) {
        this.middleName = '';
      }

      if (!hasText(this.lastName)) {
        this.lastName = '';
      }

      return (this.firstName + ' ' + this.middleName + ' ' + this.lastName)
              .replace('  ', ' ')
              .trim();
    };

    return NameBuilder;
  }
]);
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
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/07
 */
app.factory('validator.UIFieldValidator', [
  function () {

    var $ = window.jQuery;

    /**
     * class UIFieldValidator
     */
    var UIFieldValidator = function () {
      throw new Error('Unsupported new instance.');
    };

    function parseJSON(str) {
      try {
        return JSON.parse(str.replace(/\'/g, "\""));
      } catch (ex) {
        return null;
      }
    }

    function hasDanger($el) {
      return /true/.test($el.attr('data-validate-field-show-danger'));
    }

    function showDanger($el) {
      var $parents = $el.parents('.form-group');
      $parents.addClass('has-danger');
      $parents.find('input.form-control').addClass('form-control-danger');
    }

    function hideDanger($el) {
      var $parents = $el.parents('.form-group');
      $parents.removeClass('has-danger');
      $parents.find('input.form-control').removeClass('form-control-danger');
    }

    function getMessage(json, codeType, message_opt) {
      var obj = parseJSON(json) || {};
      if (/.*\}$/.test(json)) {
        return obj[codeType] || message_opt || json;
      }
      return obj[codeType] || json || message_opt;
    }

    function showErrorByAttr(attrName, attrValue, codeType, message_opt) {
      var $el = $('[' + attrName + '=' + attrValue + ']');
      if ($el.length) {
        var json = $el.attr(attrName + '-message');
        var message = getMessage(json, codeType, message_opt);
        $el.siblings('input.form-control').addClass('dip--validate-error');
        $el.siblings('.dip--validate-message').text('');
        $el.text(message);
      }

      return $el;
    }

    /**
     * @param {String} fieldName
     * @param {String} codeType
     * @param {String} message_opt 
     */
    UIFieldValidator.showError = function (fieldName, codeType, message_opt) {
      var $el = showErrorByAttr('data-validate-field', fieldName, codeType, message_opt);
      if (hasDanger($el)) {
        showDanger($el);
      }
    };

    /**
     * @param {String} codeType
     * @param {String} message_opt
     */
    UIFieldValidator.showErrorByCode = function (codeType, message_opt) {
      var fieldName = 'data-validate-code';
      var $el = showErrorByAttr(fieldName, codeType, codeType, message_opt);
      var $link = $('[' + fieldName + '-link=' + codeType + ']')
              .siblings('input.form-control')
              .addClass('dip--validate-error');

      if (hasDanger($el)) {
        showDanger($el);
        showDanger($link);
      }
    };

    function hideError($el) {
      $el.siblings('input.form-control').removeClass('dip--validate-error');
      $el.text('');
      hideDanger($el);
    }

    /**
     * @param {String} fieldName
     */
    UIFieldValidator.hideError = function (fieldName) {
      hideError($('[data-validate-field=' + fieldName + ']'));
    };

    /**
     * @param {String} codeType
     */
    UIFieldValidator.hideErrorByCode = function (codeType) {
      hideError($('[data-validate-code=' + codeType + ']'));
    };


    /**
     * hide all errors
     */
    UIFieldValidator.hideAllErrors = function () {
      $('[data-validate-code]').text('');
      $('[data-validate-field]').text('');
      $('[data-validate-code-link]').text('');
      $('.has-danger').removeClass('has-danger');
      $('.form-control-danger').removeClass('form-control-danger');
      $('.dip--validate-error').removeClass('dip--validate-error');
    };

    /**
     * @param {String} attrValue
     */
    UIFieldValidator.showSuccess = function (attrValue) {
      var $el = $('[data-success-field=' + attrValue + ']');
      if ($el.length) {
        var message = $el.attr('data-success-field-message');
        $el.text(message);
        $el.parents('.form-group').addClass('has-success');
        $el.siblings('input.form-control').addClass('form-control-success');
      }
    };

    /** 
     * @param {String} attrValue
     */
    UIFieldValidator.hideSuccess = function (attrValue) {
      var $el = $('[data-success-field=' + attrValue + ']');
      if ($el.length) {
        $el.text('');
        $el.parents('.form-group').removeClass('has-success');
        $el.siblings('input.form-control').removeClass('form-control-success');
      }
    };

    return UIFieldValidator;

  }
]);

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/18
 */
app.factory('dashboard.component.DashboardForm1Dialog', [
  'component.ConfirmDialog',
  function (ConfirmDialog) {

    /**
     * class DashboardForm1Dialog
     */
    var DashboardForm1Dialog = function () {
      ConfirmDialog.call(this, 'dashboardForm1Dialog');
      this.data.cancelButtonLabel = 'ยกเลิก';
      this.data.confirmButtonLabel = 'ตกลง';
      this.cssClassName = 'dip--dialog--dashboard-form1';
    };

    angular.extend(DashboardForm1Dialog.prototype, ConfirmDialog.prototype);

    /**
     * @return {DashboardForm1Dialog} dialog instance
     */
    DashboardForm1Dialog.create = function () {
      return new DashboardForm1Dialog();
    };
    
    return DashboardForm1Dialog;

  }
]);
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/18
 */
app.controller('dashboard.controller.DashboardFormAllCtrl', [
  '$scope',
  '$timeout',
  'dashboard.component.DashboardForm1Dialog',
  function ($scope, $timeout, DashboardForm1Dialog) {


    $scope.onShowDialogForm1 = function () {

      DashboardForm1Dialog.create()
              .setTitle('xxxx')
              .onAsyncConfirm(function ($dialog) {
                $timeout(function () {
                  $dialog.close()
                }, 3000);
              })
              .open();

    };

  }
]);
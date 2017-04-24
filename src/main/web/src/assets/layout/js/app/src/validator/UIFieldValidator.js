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

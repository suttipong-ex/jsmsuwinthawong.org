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
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
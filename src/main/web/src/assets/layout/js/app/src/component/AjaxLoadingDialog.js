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
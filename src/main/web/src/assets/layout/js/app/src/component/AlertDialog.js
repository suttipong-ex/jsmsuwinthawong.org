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
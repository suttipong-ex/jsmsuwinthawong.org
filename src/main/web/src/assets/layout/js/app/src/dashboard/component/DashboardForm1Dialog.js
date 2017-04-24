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
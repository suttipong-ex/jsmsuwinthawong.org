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
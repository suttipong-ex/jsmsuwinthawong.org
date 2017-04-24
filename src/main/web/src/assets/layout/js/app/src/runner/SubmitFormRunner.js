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
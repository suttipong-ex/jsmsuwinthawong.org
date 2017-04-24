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
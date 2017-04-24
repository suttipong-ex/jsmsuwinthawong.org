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

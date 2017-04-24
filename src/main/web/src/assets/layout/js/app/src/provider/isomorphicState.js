/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.provider('isomorphicState', [
  function () {

    var el = document.getElementById('iso-state');
    var dataState = angular.element(el).attr('data-state');
    var state = dataState ? JSON.parse(dataState) : null;

    this.$get = function () {
      return state;
    };
  }
]);

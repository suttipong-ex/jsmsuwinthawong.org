/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.factory('component.Notification', [
  'Notification',
  function (Noti) {

    /**
     * @component Notification
     */
    var Notification = function () {
      this.title = null;
      this.message = null;
    };

    /**
     * @returns {Notification}
     */
    Notification.create = function () {
      return new Notification();
    };

    /**
     * @param {String} title
     * @returns {Notification}
     */
    Notification.prototype.setTitle = function (title) {
      this.title = title;
      return this;
    };

    /**
     * @param {String} message
     * @returns {Notification}
     */
    Notification.prototype.setMessage = function (message) {
      this.message = message;
      return this;
    };

    Notification.prototype.show = function () {
      Noti({
        title: this.title,
        message: this.message
      });
    };

    return Notification;
  }
]);
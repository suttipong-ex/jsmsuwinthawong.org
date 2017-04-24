/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
app.factory('util.NameBuilder', [
  'util.StringUtils',
  function (StringUtils) {

    var hasText = StringUtils.hasText;

    /**
     * class NameBuilder
     * 
     * @param {String} firstName 
     */
    var NameBuilder = function (firstName) {
      this.firstName = firstName;
      this.middleName = null;
      this.lastName = null;
    };

    /**
     * @param {String} firstName
     * @return {NameBuilder} instance
     */
    NameBuilder.fromFirstName = function (firstName) {
      return new NameBuilder(firstName);
    };

    /** 
     * @param {String} middleName
     * @return {NameBuilder}
     */
    NameBuilder.prototype.andMiddleName = function (middleName) {
      this.middleName = middleName;
      return this;
    };

    /** 
     * @param {String} lastName
     * @return {NameBuilder}
     */
    NameBuilder.prototype.andLastName = function (lastName) {
      this.lastName = lastName;
      return this;
    };

    /**
     * @return {String}
     */
    NameBuilder.prototype.build = function () {
      if (!hasText(this.firstName)) {
        this.firstName = '';
      }

      if (!hasText(this.middleName)) {
        this.middleName = '';
      }

      if (!hasText(this.lastName)) {
        this.lastName = '';
      }

      return (this.firstName + ' ' + this.middleName + ' ' + this.lastName)
              .replace('  ', ' ')
              .trim();
    };

    return NameBuilder;
  }
]);
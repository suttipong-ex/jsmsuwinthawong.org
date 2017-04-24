/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
app.factory('enum.Enumerate', [
  'util.StringUtils',
  'util.MethodNameUtils',
  function (StringUtils, MethodNameUtils) {

    var hasText = StringUtils.hasText;
    var isArray = angular.isArray;
    var isObject = angular.isObject;
    var isString = angular.isString;
    var forEach = angular.forEach;

    /*
     * Example 1
     * ---------
     * 
     * var ArticleStatus = Enumerate([
     *     {
     *         name: 'PUBLISHED',
     *         description: 'published'
     *     },
     *     {
     *         name: 'DRAFT',
     *         description: 'draft'
     *     }
     * ]);
     * 
     * Using
     * 
     * ArticleStatus.PUBLISHED
     * ArticleStatus.PUBLISHED.getName()
     * ArticleStatus.PUBLISHED.getDescription()
     * 
     * ArticleStatus.DRAFF
     * ArticleStatus.DRAFF.getName()
     * ArticleStatus.DRAFF.getDescription()
     * 
     * =========================================
     * 
     * Example 2
     * ---------
     * 
     * var LikeRefType = Enumerate([
     *     'POST',
     *     'COMMENT'
     * ]);
     * 
     * Using
     * 
     * LikeRefType.POST
     * LikeRefType.POST.getName()
     * LikeRefType.COMMENT
     * LikeRefType.COMMENT.getName()
     */

    return (function (values, optional) {

      if (!isArray(values)) {
        throw new Error('invalid arguments type, require Array.');
      }

      if (values.length < 1) {
        throw new Error('require values.');
      }

      /**
       * enum Enumerate
       *
       * @param {String | Object} value 
       */
      var Enumerate = function (value) {

        this.name = null; /* String */

        if (isObject(value)) {
          initObject.call(this, value);
          return;
        }

        if (isString(value)) {
          this.name = value;
          return;
        }

        throw new Error('invalid arguments.');
      };

      function initObject(value) {
        if (!hasText(value.name)) {
          throw new Error('require attribute name.');
        }

        forEach(value, function (val, attr) {
          this[attr] = val;
        }, this);
      }

      /**
       * keep all enums in this attributes
       */
      Enumerate._values = [];

      /**
       * @return {Array<Enumerate>}
       */
      Enumerate.values = function () {
        return Enumerate._values;
      };

      function findByName(values, name) {
        var e = null;
        forEach(values, function (val) {
          if (val.name === name) {
            e = val;
            return false;
          }
        });

        return e;
      }

      /**
       * @param {String} name
       * @returns {Enumerate}
       */
      Enumerate.valueOf = function (name) {

        var valid = hasText(name)
                && name !== 'null'
                && name !== 'undefined';

        if (!valid) {
          return null;
        }

        var e = findByName(Enumerate._values, name);
        if (!e) {
          throw new Error('not found enum of value "' + name + '".');
        }

        return e;
      };

      /**
       * @returns {String}
       */
      Enumerate.prototype.toString = function () {
        return this.name;
      };

      /**
       * @param {String | Enumerate} name 
       * @returns {Boolean}
       */
      Enumerate.prototype.is = function (name) {

        if (isString(name)) {
          return this.name === name;
        }

        return this === name;
      };

      optional && forEach(optional, function (val, attr) {
        Enumerate.prototype[attr] = val;
      });

      function getAttrNames(values) {
        var value = values[0];
        if (isString(value)) {
          return ['name'];
        }

        var attrs = [];
        forEach(value, function (value, attr) {
          attrs.push(attr);
        });

        var isNotFoundName = attrs.indexOf('name') === -1;
        if (isNotFoundName) {
          attrs.push('name');
        }

        return attrs;
      }

      var attrs = getAttrNames(values);
      forEach(attrs, function (attr) {
        var getter = MethodNameUtils.toGetterName(attr);
        Enumerate.prototype[getter] = function () {
          return this[attr];
        };
      });

      forEach(values, function (value) {
        var name = isObject(value) ? value.name : value;
        var e = findByName(Enumerate._values, name);
        if (!e) {
          e = new Enumerate(value);
          Enumerate._values.push(e);
        }

        Object.freeze(e);
        Enumerate[name] = e;
      });

      Object.freeze(Enumerate._values);
      Object.freeze(Enumerate);

      return Enumerate;
    });
  }
]);
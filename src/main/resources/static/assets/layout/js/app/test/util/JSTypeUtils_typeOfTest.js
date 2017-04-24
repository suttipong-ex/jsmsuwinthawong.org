/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
describe('util.JSTypeUtils_typeOfTest', function () {

  var JSTypeUtils;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.JSTypeUtils',
    function (_JSTypeUtils) {
      JSTypeUtils = _JSTypeUtils;
    }
  ]));

  it('should be "Null" when input is null', function () {

    var input = null;
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Null';

    expect(output).toEqual(expected);

  });

  it('should be "Undefined" when input is undefined', function () {

    var input = undefined;
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Undefined';

    expect(output).toEqual(expected);

  });

  it('should be "String" when input is "jittagornp"', function () {

    var input = "jittagornp";
    var output = JSTypeUtils.typeOf(input);
    var expected = 'String';

    expect(output).toEqual(expected);

  });

  it('should be "Number" when input is 1989', function () {

    var input = 1989;
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Number';

    expect(output).toEqual(expected);

  });

  it('should be "Object" when input is {}', function () {

    var input = {};
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Object';

    expect(output).toEqual(expected);

  });

  it('should be "Array" when input is []', function () {

    var input = [];
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Array';

    expect(output).toEqual(expected);

  });

  it('should be "Boolean" when input is true', function () {

    var input = true;
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Boolean';

    expect(output).toEqual(expected);

  });

  it('should be "RegExp" when input is /\s/ig', function () {

    var input = /\s/ig;
    var output = JSTypeUtils.typeOf(input);
    var expected = 'RegExp';

    expect(output).toEqual(expected);

  });

  it('should be "Number" when input is Date.now()', function () {

    var input = Date.now();
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Number';

    expect(output).toEqual(expected);

  });

  it('should be "Function" when input is function(){}', function () {

    var input = function () {};
    var output = JSTypeUtils.typeOf(input);
    var expected = 'Function';

    expect(output).toEqual(expected);

  });

});
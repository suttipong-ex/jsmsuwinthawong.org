/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
describe('util.MethodNameUtils_toGetterNameTest', function () {

  var MethodNameUtils;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.MethodNameUtils',
    function (_MethodNameUtils) {
      MethodNameUtils = _MethodNameUtils;
    }
  ]));

  it('should be throw error "require name." when input is null', function () {

    expect(function () {
      var input = null;
      var output = MethodNameUtils.toGetterName(input);
    }).toThrowError('require name.');

  });

  it('should be "getA" when input is A', function () {

    var input = 'A';
    var output = MethodNameUtils.toGetterName(input);
    var expected = 'getA';

    expect(output).toEqual(expected);

  });

  it('should be "getName" when input is name', function () {

    var input = 'name';
    var output = MethodNameUtils.toGetterName(input);
    var expected = 'getName';

    expect(output).toEqual(expected);

  });

  it('should be "getUsername" when input is username', function () {

    var input = 'username';
    var output = MethodNameUtils.toGetterName(input);
    var expected = 'getUsername';

    expect(output).toEqual(expected);

  });
});
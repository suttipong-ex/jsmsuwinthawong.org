/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
describe('util.JSTypeUtilsTest', function () {

  var JSTypeUtils;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.JSTypeUtils',
    function (_JSTypeUtils) {
      JSTypeUtils = _JSTypeUtils;
    }
  ]));

  it('should be throw "Unsupported new instance."', function () {

    expect(function () {
      new JSTypeUtils();
    }).toThrowError('Unsupported new instance.');

  });

});
/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
describe('util.StringUtils_hasTextTest', function () {

  var StringUtils;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.StringUtils',
    function (_StringUtils) {
      StringUtils = _StringUtils;
    }
  ]));

  it('should be false when input is null', function () {

    var input = null;
    var output = StringUtils.hasText(input);
    var expected = false;

    expect(output).toEqual(expected);

  });

  it('should be false when input is undefined', function () {

    var input = undefined;
    var output = StringUtils.hasText(input);
    var expected = false;

    expect(output).toEqual(expected);

  });

  it('should be false when input is empty string', function () {

    var input = '';
    var output = StringUtils.hasText(input);
    var expected = false;

    expect(output).toEqual(expected);

  });

  it('should be true when input is AAA', function () {

    var input = 'AAA';
    var output = StringUtils.hasText(input);
    var expected = true;

    expect(output).toEqual(expected);

  });

});  
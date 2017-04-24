/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
describe('util.PasswordStarGeneratorTest', function () {

  var PasswordStarGenerator;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.PasswordStarGenerator',
    function (_PasswordStarGenerator) {
      PasswordStarGenerator = _PasswordStarGenerator;
    }
  ]));

  it('should be empty string when password is null', function () {

    var input = null;
    var output = PasswordStarGenerator.generate(input);
    var expected = '';

    expect(output).toEqual(expected);

  });

  it('should be empty string when password is empty string', function () {

    var input = '';
    var output = PasswordStarGenerator.generate(input);
    var expected = '';

    expect(output).toEqual(expected);

  });

  it('should be **** when password is AAAA', function () {

    var input = 'AAAA';
    var output = PasswordStarGenerator.generate(input);
    var expected = '****';

    expect(output).toEqual(expected);

  });

  it('should be ******** when password is AAAABBBB', function () {

    var input = 'AAAABBBB';
    var output = PasswordStarGenerator.generate(input);
    var expected = '********';

    expect(output).toEqual(expected);

  });
});  
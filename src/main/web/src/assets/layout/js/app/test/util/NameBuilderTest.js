/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/10
 */
describe('util.NameBuilderTest', function () {

  var NameBuilder;

  beforeEach(module('app'));

  beforeEach(inject([
    'util.NameBuilder',
    function (_NameBuilder) {
      NameBuilder = _NameBuilder;
    }
  ]));

  it('should be empty string when input is null and null and null', function () {

    var output = NameBuilder.fromFirstName(null)
            .andMiddleName(null)
            .andLastName(null)
            .build();
    var expected = '';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is empty string and empty string and empty string', function () {

    var output = NameBuilder.fromFirstName('')
            .andMiddleName('')
            .andLastName('')
            .build();
    var expected = '';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is AAA and null and null', function () {

    var output = NameBuilder.fromFirstName('AAA')
            .andMiddleName(null)
            .andLastName(null)
            .build();
    var expected = 'AAA';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is AAA and BBB and null', function () {

    var output = NameBuilder.fromFirstName('AAA')
            .andMiddleName('BBB')
            .andLastName(null)
            .build();
    var expected = 'AAA BBB';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is AAA and BBB and CCC', function () {

    var output = NameBuilder.fromFirstName('AAA')
            .andMiddleName('BBB')
            .andLastName('CCC')
            .build();
    var expected = 'AAA BBB CCC';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is AAA and null and CCC', function () {

    var output = NameBuilder.fromFirstName('AAA')
            .andMiddleName(null)
            .andLastName('CCC')
            .build();
    var expected = 'AAA CCC';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is null and BBB and CCC', function () {

    var output = NameBuilder.fromFirstName(null)
            .andMiddleName('BBB')
            .andLastName('CCC')
            .build();
    var expected = 'BBB CCC';

    expect(output).toEqual(expected);

  });

  it('should be empty string when input is null and null and CCC', function () {

    var output = NameBuilder.fromFirstName(null)
            .andMiddleName(null)
            .andLastName('CCC')
            .build();
    var expected = 'CCC';

    expect(output).toEqual(expected);

  });

}); 
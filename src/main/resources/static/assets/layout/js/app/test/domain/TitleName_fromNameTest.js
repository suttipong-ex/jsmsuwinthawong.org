/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/03
 */
describe('domain.TitleName_fromNameTest', function () {

  var TitleName;

  beforeEach(module('app'));

  beforeEach(inject([
    'domain.TitleName',
    function (_TitleName) {
      TitleName = _TitleName;
    }
  ]));

  it('should be throw error when input is null', function () {

    expect(function () {
      var input = null;
      var output = TitleName.fromName(input);
    }).toThrowError('require name.');

  });

  it('should be throw error when input is empty string', function () {

    expect(function () {
      var input = '';
      var output = TitleName.fromName(input);
    }).toThrowError('require name.');

  });

  it('should be TitleName.MR when input is Mr.', function () {

    var input = 'Mr.';
    var output = TitleName.fromName(input);
    var expected = TitleName.MR;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.MRS when input is Mrs.', function () {

    var input = 'Mrs.';
    var output = TitleName.fromName(input);
    var expected = TitleName.MRS;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.MISS when input is Miss', function () {

    var input = 'Miss';
    var output = TitleName.fromName(input);
    var expected = TitleName.MISS;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.OTHER when input is Other', function () {

    var input = 'Other';
    var output = TitleName.fromName(input);
    var expected = TitleName.OTHER;

    expect(output).toEqual(expected);

  });

  it('should be null when input is UNKNOWN', function () {

    var input = 'UNKNOWN';
    var output = TitleName.fromName(input);
    var expected = null;

    expect(output).toEqual(expected);

  });

});
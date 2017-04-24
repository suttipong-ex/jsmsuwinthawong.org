/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/03
 */
describe('domain.TitleName_valueOfTest', function () {

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
      var output = TitleName.valueOf(input);
    }).toThrowError('require value.');

  });

  it('should be throw error when input is empty string', function () {

    expect(function () {
      var input = '';
      var output = TitleName.valueOf(input);
    }).toThrowError('require value.');

  });

  it('should be TitleName.MR when input is MR', function () {

    var input = 'MR';
    var output = TitleName.valueOf(input);
    var expected = TitleName.MR;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.MRS when input is MRS', function () {

    var input = 'MRS';
    var output = TitleName.valueOf(input);
    var expected = TitleName.MRS;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.MISS when input is MISS', function () {

    var input = 'MISS';
    var output = TitleName.valueOf(input);
    var expected = TitleName.MISS;

    expect(output).toEqual(expected);

  });

  it('should be TitleName.OTHER when input is OTHER', function () {

    var input = 'OTHER';
    var output = TitleName.valueOf(input);
    var expected = TitleName.OTHER;

    expect(output).toEqual(expected);

  });

  it('should be null when input is UNKNOWN', function () {

    var input = 'UNKNOWN';
    var output = TitleName.valueOf(input);
    var expected = null;

    expect(output).toEqual(expected);

  });

});
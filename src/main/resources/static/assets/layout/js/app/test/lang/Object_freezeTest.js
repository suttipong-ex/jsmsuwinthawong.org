/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
describe('lang.Object_freezeTest', function () {

  it('should be jittagornp when input is { name : "jittagornp" }', function () {

    var input = {name: 'jittagornp'};
    var expected = 'jittagornp';

    expect(input.name).toEqual(expected);

  });

  it('should be dear when input is { name : "jittagornp" } then change input.name to dear ', function () {

    var input = {name: 'jittagornp'};
    input.name = 'dear';
    var expected = 'dear';

    expect(input.name).toEqual(expected);

  });

  it('should be jittagornp when input is { name : "jittagornp" } and freeze object ', function () {

    var input = {name: 'jittagornp'};
    Object.freeze(input);
    input.name = 'dear';
    var expected = 'jittagornp';

    expect(input.name).toEqual(expected);

  });

  it('should be 9999 when freeze only outer', function () {

    var input = {
      name: 'jittagornp',
      address: {
        province: 'nonthaburi',
        zipCode: 11120
      }
    };

    Object.freeze(input);
    input.address.zipCode = 99999;
    var expected = 99999;

    expect(input.address.zipCode).toEqual(expected);

  });

  it('should be 11120 when freeze outer and inner', function () {

    var input = {
      name: 'jittagornp',
      address: {
        province: 'nonthaburi',
        zipCode: 11120
      }
    };

    Object.freeze(input);
    Object.freeze(input.address);
    input.address.zipCode = 99999;
    var expected = 11120;

    expect(input.address.zipCode).toEqual(expected);

  });

});
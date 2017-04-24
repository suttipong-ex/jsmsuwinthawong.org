/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/29
 */
describe('enum.Enumerate_Test', function () {

  var Enumerate;
  var JSTypeUtils;

  beforeEach(module('app'));

  beforeEach(inject([
    'enum.Enumerate',
    'util.JSTypeUtils',
    function (_Enumerate, _JSTypeUtils) {
      Enumerate = _Enumerate;
      JSTypeUtils = _JSTypeUtils;
    }
  ]));

  it('should be throw error "invalid arguments type, require Array." when input is null', function () {

    expect(function () {
      var output = Enumerate(null);
    }).toThrowError('invalid arguments type, require Array.');

  });

  it('should be throw error "require values." when input is empty array', function () {

    expect(function () {
      var input = [];
      var output = Enumerate(input);
    }).toThrowError('require values.');

  });

  it('should be throw error "invalid arguments." when input is array [1, 2, 3]', function () {

    expect(function () {
      var output = Enumerate([
        1,
        2,
        3
      ]);
    }).toThrowError('invalid arguments.');

  });

  it('should be throw error "require attribute name." when input don\'t have attribute name', function () {

    expect(function () {
      var output = Enumerate([
        {
          desc: 'test'
        }
      ]);
    }).toThrowError('require attribute name.');

  });

  it('should be ok when input is array', function () {

    var input = [
      'WAIT',
      'IN_PROGRESS',
      'IN_REVIEW',
      'DONE'
    ];

    var Status = Enumerate(input);

    expect(Status.values()).toEqual([
      Status.WAIT,
      Status.IN_PROGRESS,
      Status.IN_REVIEW,
      Status.DONE
    ]);

    expect(Status.values().map(function (e) {
      return e.getName();
    })).toEqual(input);
  });

  it('should be ok when test default method', function () {

    var UserType = Enumerate([
      {
        name: 'PERSON',
        description: 'ประชาชน'
      },
      {
        name: 'COPORATION',
        description: 'นิติบุคคล'
      },
      {
        name: 'OFFICER',
        description: 'เจ้าหน้าที่'
      }
    ]);

    expect(UserType.PERSON.getName()).toEqual('PERSON');
    expect(UserType.PERSON.getDescription()).toEqual('ประชาชน');

    expect(UserType.COPORATION.getName()).toEqual('COPORATION');
    expect(UserType.COPORATION.getDescription()).toEqual('นิติบุคคล');

    expect(UserType.OFFICER.getName()).toEqual('OFFICER');
    expect(UserType.OFFICER.getDescription()).toEqual('เจ้าหน้าที่');

  });


  it('should be ok when test method is', function () {

    var TransferStatus = Enumerate([
      'LOADING',
      'PROGRESS',
      'SUCCESS'
    ]);

    expect(TransferStatus.LOADING.is('LOADING')).toBe(true);
    expect(TransferStatus.PROGRESS.is('PROGRESS')).toBe(true);
    expect(TransferStatus.SUCCESS.is('SUCCESS')).toBe(true);

    expect(TransferStatus.LOADING.is(TransferStatus.LOADING)).toBe(true);
    expect(TransferStatus.PROGRESS.is(TransferStatus.PROGRESS)).toBe(true);
    expect(TransferStatus.SUCCESS.is(TransferStatus.SUCCESS)).toBe(true);
  });

  it('should be ok when test method valueOf', function () {

    var TransferStatus = Enumerate([
      'LOADING',
      'PROGRESS',
      'SUCCESS'
    ]);

    expect(TransferStatus.LOADING).toEqual(TransferStatus.valueOf('LOADING'));
    expect(TransferStatus.PROGRESS).toEqual(TransferStatus.valueOf('PROGRESS'));
    expect(TransferStatus.SUCCESS).toEqual(TransferStatus.valueOf('SUCCESS'));
    expect(function () {
      TransferStatus.valueOf('UNKNOWN')
    }).toThrowError('not found enum of value "UNKNOWN".');

  });

  it('should be freeze all values when create enum', function () {

    var input = ['FAIL', 'SUCCESS'];
    var Status = Enumerate(input);

    expect(Status.values().map(function (e) {
      return e.getName();
    })).toEqual(input);

    //freeze : can't insert new values
    expect(function () {
      Status._values.push({name: 'UNKNOWN'});
    }).toThrowError('Attempted to assign to readonly property.');

    Status.SUCCESS = {};
    //freeze : can't change enum reference to {}
    expect(Status.SUCCESS).toEqual(Status.valueOf('SUCCESS'));

    Status.SUCCESS.name = 'fail';
    //freeze : can't change enum .name to 'fail'
    expect(Status.SUCCESS.name).toEqual('SUCCESS');

  });

});
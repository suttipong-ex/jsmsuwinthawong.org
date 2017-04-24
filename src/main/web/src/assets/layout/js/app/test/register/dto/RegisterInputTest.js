/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/03
 */
describe('register.dto.RegisterInputTest', function () {

  var RegisterInput; 

  beforeEach(module('app'));

  beforeEach(inject([
    'register.dto.RegisterInput',
    function (_RegisterInput) {
      RegisterInput = _RegisterInput;
    }
  ]));

  it('should be empty JSON Object when empty bean.', function () {

    var input = new RegisterInput();
    var output = input.toJSON();
    var expected = {
      user_type : '',
      pid: '',
      cid : '',
      title_name: '',
      title_name_other: '', 
      first_name: '',
      middle_name: '',
      last_name: '',
      name : '',
      username: '',
      password: '',
      confirm_password: '',
      email: ''
    };

    expect(output).toEqual(expected);

  });

});
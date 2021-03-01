import { connect } from 'react-redux';
import { logout } from '../../actionCreators';

const Logout = (props) => {
  props.logout({
    username: '',
    password: '',
    isLoggedin: false,
  });

  window.location.href = '/';

  return null;
};

export default connect(null, { logout })(Logout);

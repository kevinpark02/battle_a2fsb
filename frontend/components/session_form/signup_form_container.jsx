import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
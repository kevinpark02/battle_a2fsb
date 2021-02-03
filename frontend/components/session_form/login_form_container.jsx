import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
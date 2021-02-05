import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeSessionErrors } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchBattles } from "../../actions/battle_actions"

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBattles: () => dispatch(fetchBattles())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
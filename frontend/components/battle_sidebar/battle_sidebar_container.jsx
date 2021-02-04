import BattleSideBar from './battle_sidebar'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchUsers: () => dispatch(fetchUsers())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleSideBar);
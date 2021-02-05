import BattleSideBar from './battle_sidebar'
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        battles: state.entities.battles
    })
}

export default connect(mapStateToProps, null)(BattleSideBar);
import BattleSideBar from './battle_sidebar'
import { connect } from 'react-redux';
import { fetchBattles, updateBattle } from '../../actions/battle_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        battles: Object.values(state.entities.battles)
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBattles: () => dispatch(fetchBattles()),
        fetchUsers: () => dispatch(fetchUsers()),
        updateBattle: (battle) => dispatch(updateBattle(battle))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleSideBar);
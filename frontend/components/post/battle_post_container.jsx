import { connect } from 'react-redux';
import { fetchBattle } from '../../actions/battle_actions';
import  BattlePost  from "./battle_post";

const mapStateToProps = (state, ownProps) => {
    return({
        posts: Object.values(state.entities.posts),
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchBattle: (battle) => dispatch(fetchBattle(battle))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BattlePost)
import BattleShow from "./battle_show";
import { fetchBattle } from "../../actions/battle_actions";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return({
        battle: state.entities.battles[ownProps.match.params.battleId]
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBattle: (battle) => dispatch(fetchBattle(battle))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleShow);
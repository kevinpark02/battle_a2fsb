import BattleShow from "./battle_show";
import { fetchBattles, fetchBattle } from "../../actions/battle_actions";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return({
        battleId: ownProps.match.params.battleId,
        battle: state.entities.battles[ownProps.match.params.battleId]
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBattles: () => dispatch(fetchBattles()),
        fetchBattle: (battle) => dispatch(fetchBattle(battle))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleShow);
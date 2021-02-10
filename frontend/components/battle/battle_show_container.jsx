import BattleShow from "./battle_show";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return({
        battle: state.entities.battles[ownProps.match.params.battleId]
    })
}

export default connect(mapStateToProps, null)(BattleShow);
import BattleCreateForm from "./battle_create_form";
import { createBattle, fetchBattles }from "../../actions/battle_actions";
import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//     return({

//     })
// }

const mapDipatchToProps = (dispatch) => {
    return({
        createBattle: (battle) => dispatch(createBattle(battle)),
        fetchBattles: () => dispatch(fetchBattles())
    })
}

export default connect(null, mapDipatchToProps)(BattleCreateForm)
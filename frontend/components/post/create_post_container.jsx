import { connect } from 'react-redux';
import PostForm from "./post_form";
import { fetchBattle, updateBattle } from "../../actions/battle_actions";
import { createPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        tasks: Object.values(state.entities.tasks),
        postContent: {
            body: "",
            battle_id: ownProps.battle.id,
            user_id: state.session.id,
            points_earned: {}
        }
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        createPost: (post) => dispatch(createPost(post)),
        fetchBattle: (battle) => dispatch(fetchBattle(battle)),
        updateBattle: (battle) => dispatch(updateBattle(battle))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
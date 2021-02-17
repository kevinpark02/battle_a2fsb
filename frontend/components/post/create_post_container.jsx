import { connect } from 'react-redux';
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        battleId: ownProps.battle.id,
        userId: state.session.id,
        tasks: Object.values(state.entities.tasks),
        postContent: {
            body: "",
            battle_id: battleId,
            user_id: userId
        }
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        createPost: (post) => dispatch(createPost(post)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
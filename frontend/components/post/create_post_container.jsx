import { connect } from 'react-redux';
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        tasks: Object.values(state.entities.tasks),
        postContent: {
            body: "",
            battle_id: ownProps.battle.id,
            user_id: state.session.id,
            score_board: {}
        }
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        createPost: (post) => dispatch(createPost(post)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
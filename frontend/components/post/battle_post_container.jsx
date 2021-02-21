import { connect } from 'react-redux';
import  BattlePost  from "./battle_post";

const mapStateToProps = (state) => {
    return({
        posts: Object.values(state.entities.posts)
    })
}

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, null)(BattlePost)
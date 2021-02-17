import {
    RECEIVE_POST,
    REMOVE_POST
} from "../actions/post_actions";

const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POST:
            if (action.battle.posts === undefined) {
                return {}
            } else {
                return action.battle.posts
            }
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState
        default:
            return state;
    }
};

export default postReducer
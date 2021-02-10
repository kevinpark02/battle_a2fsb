import {
    RECEIVE_ALL_BATTLES,
    RECEIVE_JOINED_BATTLE
} from "../actions/battle_actions";

const battleReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_BATTLES:
            return action.battles;
        case RECEIVE_JOINED_BATTLE:
            return state;
        default:
            return state;
    }
};

export default battleReducer;
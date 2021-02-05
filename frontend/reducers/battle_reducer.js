import {
    RECEIVE_ALL_BATTLES
} from "../actions/battle_actions";

const battleReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BATTLES:
            return action.battles
        default:
            return state;
    }
};

export default battleReducer;
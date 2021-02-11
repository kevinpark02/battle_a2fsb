import {
    RECEIVE_ALL_BATTLES,
    RECEIVE_NEW_BATTLE,
    RECEIVE_JOINED_BATTLE
} from "../actions/battle_actions";

const battleReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_BATTLES:
            return action.battles;
        case RECEIVE_NEW_BATTLE:
            return Object.assign(nextState, action.battle.battle);
        case RECEIVE_JOINED_BATTLE:
            return state;
        default:
            return state;
    }
};

export default battleReducer;
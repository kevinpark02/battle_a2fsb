import {
    REMOVE_TASK
} from "../actions/task_actions";

import {
    RECEIVE_BATTLE
} from "../actions/battle_actions"

const tasksReducer = (state ={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BATTLE:
            if (action.battle.tasks === undefined) {
                return {}
            } else {
                return action.battle.tasks;
            }
        case REMOVE_TASK:
            delete nextState[action.taskId]
            return nextState
        default:
            return state;
    }
};

export default tasksReducer
import {
    RECEIVE_NEW_BATTLE,
    REMOVE_TASK
} from "../actions/task_actions";

const taskReducer = (state ={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_NEW_BATTLE:
            return action.task
        case REMOVE_TASK:
            delete nextState[action.taskId]
            return nextState
        default:
            return state;
    }
};

export default taskReducer
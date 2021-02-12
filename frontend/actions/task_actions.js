import * as TaskApiUtil from "../util/task_api_util";

export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
});

export const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    taskId
});

export const 


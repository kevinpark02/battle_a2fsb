import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import battlesReducer from "./battle_reducer";
import tasksReducer from "./task_reducer";
import postsReducer from "./post_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  battles: battlesReducer,
  tasks: tasksReducer,
  posts: postsReducer
});

export default entitiesReducer;
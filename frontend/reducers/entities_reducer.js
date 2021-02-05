import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import battlesReducer from "./battle_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  battles: battlesReducer
});

export default entitiesReducer;
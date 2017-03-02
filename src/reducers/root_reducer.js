import { combineReducers } from 'redux';
import { user_signup } from "./user_signup";

const rootReducer = combineReducers({
    user_login : user_signup
});
export default rootReducer;
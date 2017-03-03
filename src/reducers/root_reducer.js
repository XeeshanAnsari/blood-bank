import { combineReducers } from 'redux';
import { Main_reducers } from "./Main_reducer";

const rootReducer = combineReducers({
    reducer : Main_reducers
});
export default rootReducer;
import { applyMiddleware,  createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './'
let middleware = applyMiddleware(thunk); 


const  store = createStore(reducers ,middleware )


export default store;


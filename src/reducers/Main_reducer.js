import ActionTypes from '../constants/action_types';


export function Main_reducers(state = {},action){
    switch(action.type){
        case ActionTypes.newUserFulfilled:
            return {...state};
        case ActionTypes.signInWithFulfilled:
             return {...state};
        case ActionTypes.newDonerFulfilled:
            return {...state}   

       default :
         return state
    }
}
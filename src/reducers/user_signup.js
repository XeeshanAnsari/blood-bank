import ActionTypes from '../constants/action_types';


export function user_signup(state = {},action){
    switch(action.type){
        case ActionTypes.newUserFulfilled:
            return {...state};
        case ActionTypes.newDonerFulfilled:
            return {...state}    
       default :
         return state
    }
}
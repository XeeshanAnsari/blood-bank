import ActionTypes from '../constants/action_types';
import firebaseDb from '../firebase/firebase';

export function addNewUser(userInfo) {
    return dispatch => {
        
     const usersRef = firebaseDb.ref('/Users');
        usersRef.push ({
            userInfo
        })
        .then(() => {
            dispatch(addNewUserFulfilledAction({ userInfo }));
        })
                      
    }
}

export function addNewUserFulfilledAction(userInfo){
    
    return{
           type: ActionTypes.newUserFulfilled,
           payload:userInfo
    }

}

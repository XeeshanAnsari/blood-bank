import ActionTypes from '../constants/action_types';
 import { firebaseDb , firebaseAuth} from '../firebase/firebase';



function  addNewUserToAuth(email , pass){
    return firebaseAuth.createUserWithEmailAndPassword(email,pass);
}

export function addNewUser(userInfo) {
    return dispatch => {
        
     const usersRef = firebaseDb.ref('/Users');
        usersRef.push ({
            userInfo
        })
        .then(() => {
            dispatch(addNewUserToAuth(userInfo.email, userInfo.pass));
            dispatch(addNewUserFulfilledAction({ userInfo }));
        })
                      
    }
}

export function addNewUserFulfilledAction(userInfo){
    
    return{
        
           type: ActionTypes.newUserFulfilled,
           value:userInfo
    }

}

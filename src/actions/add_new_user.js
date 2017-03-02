import ActionTypes from '../constants/action_types';
import fireaseDb from '../firebase/firebase';

export function addNewUser(userInfo) {
    return dispatch => {
        
     const usersRef = fireaseDb.ref('/newUsers');
        usersRef.push ({
            userInfo
        })
                
        
    }
}

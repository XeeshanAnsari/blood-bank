import ActionTypes from '../constants/action_types';
import firebaseDb from '../firebase/firebase';

export function addNewDoner(donerInfo) {
    return dispatch => {
        
     const donersRef = firebaseDb.ref('/Doners');
        donersRef.push ({
            donerInfo
        })
        .then(() => {
            dispatch(addNewDonerFulfilledAction({ donerInfo }));
        })
                      
    }
}

export function addNewDonerFulfilledAction(donerInfo){
    
    return{
           type: ActionTypes.newDonerFulfilled,
           payload:  donerInfo
    }

}

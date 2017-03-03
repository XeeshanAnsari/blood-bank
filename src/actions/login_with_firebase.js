
import ActionTypes from '../constants/action_types';
import { firebaseDb , firebaseAuth} from '../firebase/firebase';



function  signInAuth(email , pass){
  console.log(email ,pass)
     let auth = firebaseAuth.signInWithEmailAndPassword(email,pass)
    auth.then((user)=>{
      
         signInWithFulfilledAction(user)
         
    })
    auth.catch(
        error => console.log("Error :",error)
    )
}

export function signInWithAuth(data) {
    return dispatch => {
         
    
          signInAuth(data.email, data.pass)
           
            
    }
}


export function signInWithFulfilledAction(data){
    return {
        type: ActionTypes.signInWithFulfilled,
        value: data
    }
}
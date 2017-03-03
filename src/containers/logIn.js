import { connect } from 'react-redux';
import { signInWithAuth } from '../actions/login_with_firebase';

import SignInForm from '../components/pages/SignInForm';




function mapStateToProps(state){
    return {
     data: state.data
    };

}

function mapDispatchToProps(dispatch){
   
    
    return {
         onLogIn: (data) => dispatch(signInWithAuth(data))
    };
}

const logIn = connect(mapStateToProps, mapDispatchToProps)(SignInForm);


export default logIn;
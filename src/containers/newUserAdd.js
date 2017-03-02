import { connect } from 'react-redux';
import { addNewUser } from '../actions/add_new_user';

import SignUpForm from '../components/pages/SignUpForm';


function mapStateToProps(state){
    return {
      
    };

}

function mapDispatchToProps(dispatch){
   
    
    return {
         onAddNewUser: (userInfo) => dispatch(addNewUser(userInfo))
    };
}

const newUserAdd = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);


export default newUserAdd;
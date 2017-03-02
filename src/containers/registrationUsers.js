import { connect } from 'react-redux';
import { addNewDoner } from '../actions/add_new_doner';

import donerForm from '../components/pages/donerForm';


function mapStateToProps(state){
    return {
      donerUsers: state.donerinfo
    };

}

function mapDispatchToProps(dispatch){
   
    
    return {
         onAddNewDoner: (donerInfo) => dispatch(addNewDoner(donerInfo))
    };
}

const registrationDoner = connect(mapStateToProps, mapDispatchToProps)(donerForm);


export default registrationDoner;
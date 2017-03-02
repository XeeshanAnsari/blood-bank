import React from 'react';

// import firebase from './../../firebase/firebase'



class SignUp extends React.Component{
    constructor(){
        super()
        this.thihandleSubmit = this.handleSubmit.bind(this)
        
    }
    
    handleSubmit(e){
        e.preventDefault();

      

    }
    
    render(){
       return (
           <div  className="container well">
               <h2>Sign Up</h2>
               
                <form onSubmit={this.handleSubmit}  className='form-group'>
                    <input type="text"  className="form-control"  placeholder="First Name" /><br/>
                    <input type="text" className="form-control" placeholder="Last Name" /><br/>
                    <input type="email"   className="form-control"  placeholder="Email" /><br/>
                    <input type="password" className="form-control"  placeholder="Password" /><br/>
                    <button className="btn btn-success btn-sm "  >Sign up</button>

                 </form>
           </div>          
       )   
    }
}

export default SignUp;
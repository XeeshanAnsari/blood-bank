import React from 'react';




class SignInForm extends React.Component{
    constructor(){
        super()
    }
    render(){
       return (
           <div  className="container well">
               <h2>Login In</h2>
                <form onSubmit=""  className="from-group ">
                    <input type="text"   className="form-control" placeholder="Email " /><br />
                    <input type="password"  className="form-control" placeholder="Password" /><br />
                    <button className="btn btn-primary btn-sm "   ><b>Log in</b></button>
                 </form>
           </div>          
       )   
    }
}

export default SignInForm;
import React from 'react';




class SignIn extends React.Component{
    render(){
       return (
           <div  className="container well">
               <h2>Login In</h2>
                <form onSubmit=""  className="from-group ">
                    <input type="text"   placeholder="Email or user name" /><br />
                    <input type="password"  placeholder="Password" /><br />
                    <button className="btn btn-primary btn-sm " name="login"  ><b>Log in</b></button>
                 </form>
           </div>          
       )   
    }
}

export default SignIn
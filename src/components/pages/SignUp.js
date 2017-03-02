import React from 'react';




class SignUp extends React.Component{
    render(){
       return (
           <div  className="container well">
               <h2>Sign Up</h2>
               
                <form onSubmit=""  className="from-group ">
                    <input type="text"  placeholder="First Name" /><br/>
                    <input type="text" placeholder="Last Name" /><br/>
                    <input type="email"  id="email" placeholder="Email" /><br/>
                    <input type="password"  placeholder="Password" /><br/>
                    <button className="btn btn-success btn-sm "  >Sign up</button>

                 </form>
           </div>          
       )   
    }
}

export default SignUp;
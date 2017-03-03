import React from 'react';




class SignInForm extends React.Component{
    constructor(){
        super()
        this.state ={
            email:'',
            pass:'',
            
        }
        this.logInhandler = this.logInhandler.bind(this)
    }
// for data send to container Component
    logInhandler(e){
         e.preventDefault();
        const data = {
            email: this.state.email,
            pass:this.state.pass
        }

        this.props.onLogIn(data);
        this.setState({
            email:'',
            pass:''
        })

    }
 

    render(){
       return (
           <div  className="container well">
               <h2>Login In</h2>
                <form onSubmit={this.logInhandler}  className="from-group ">
                    <input type="text" value={this.state.email} onChange={e => this.setState({email: e.target.value})}   className="form-control" placeholder="Email " /><br />
                    <input type="password" value={this.state.pass} onChange={e => this.setState({pass: e.target.value})}  className="form-control" placeholder="Password" /><br />
                    <button className="btn btn-primary btn-sm "   ><b>Log in</b></button>
                 </form>
           </div>          
       )   
    }
}

export default SignInForm;
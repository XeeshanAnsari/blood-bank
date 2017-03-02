import React from 'react';


// import firebase from './../../firebase/firebase'



class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
             fName: '',
             lName: '',
             email: '',
             pass: '', 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        const userInfo = {
             fName: this.state.fName,
             lName:this.state.lName,
             email: this.state.email,
             pass: this.state.pass, 
        }
         this.props.onAddNewUser(userInfo)
        this.setState({
             fName: '',
             lName: '',
             email: '',
             pass: '', 
        })
     }
    
    render(){
       return (
           <div  className="container well">
               <h2>Sign Up</h2>
               
                <form onSubmit={this.handleSubmit}  className='form-group'>
                    <input type="text" value={this.state.fName} onChange={e => this.setState({fName: e.target.value})} className="form-control"  placeholder="First Name" /><br/>
                    <input type="text" value={this.state.lName} onChange={e => this.setState({lName: e.target.value})} className="form-control" placeholder="Last Name" /><br/>
                    <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}  className="form-control"  placeholder="Email" /><br/>
                    <input type="password" value={this.state.pass} onChange={e => this.setState({pass: e.target.value})} className="form-control"  placeholder="Password" /><br/>
                    <button className="btn btn-success btn-sm " type="submit" >Sign up</button>

                 </form>
           </div>          
       )   
    }
}

export default SignUp;
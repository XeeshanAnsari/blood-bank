import React from 'react';

// import firebase from './../../firebase/firebase'



class donerFrom extends React.Component{
    constructor(){
        super()
        this.state={
             name: '',
             age: '',
             bGroup: '', //bgroup mean bloodGroup
             contact:'',
             address: '',
            
        }
        this.handleDonerSubmit = this.handleDonerSubmit.bind(this)
        
    }
    
    handleDonerSubmit(e){
        e.preventDefault();

       const donerInfo = {
             name: this.state.name,
             age:this.state.age,
             bGroup: this.state.bGroup,
             contact: this.state.contact,
             address: this.state.address, 
        }
         this.props.onAddNewDoner(donerInfo)

        this.setState= {
             name: '',
             age: '',
             bGroup: '', //bgroup mean bloodGroup
             contact:'',
             address: '',
            
        }
     
     }
    
    render(){
       return (
           <div  className="container well">
               <h2>DONER INFORMATION</h2>
               
                <form onSubmit={this.handleDonerSubmit}  className='form-group'>
                    <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} className="form-control"  placeholder="Name" /><br/>
                    <input type="text" value={this.state.age} onChange={e => this.setState({age: e.target.value})} className="form-control" placeholder="Age" /><br/>
                    <input type="text" value={this.state.bGroup} onChange={e => this.setState({bGroup: e.target.value})}  className="form-control"  placeholder="Blood Group" /><br/>
                    <input type="text" value={this.state.contact} onChange={e => this.setState({contact: e.target.value})}  className="form-control"  placeholder="Contact No" /><br/>
                    <input type="text" value={this.state.address} onChange={e => this.setState({address: e.target.value})} className="form-control"  placeholder="Address" /><br/>
                    <button className="btn btn-success  " type="submit" >Submit</button>

                 </form>
           </div>          
       )   
    }
}

export default donerFrom;
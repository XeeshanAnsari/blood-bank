import React from 'react';
import { Link } from 'react-router';



class Header extends React.Component{
    render(){
       return (
           <div>
               <nav className="navbar navbar-inverse">
                   <span >
                       <Link  to="/" className=" navbar-brand"> Blood-bank</Link>
                   </span>
                   
                   <ul className=" nav navbar-nav navbar-right ">
                        <Link className="navbar-btn btn btn-primary " to="/signin" ><li>Sign In</li></Link>
                        <Link className="navbar-btn btn btn-primary" to="/signup" ><li>Sign Up</li></Link>
                    </ul>
               </nav>
               
           </div>          
       )   
    }
}

export default Header;
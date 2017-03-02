import React from 'react';
import { Link } from 'react-router';



class Header extends React.Component{
    render(){
       return (
           <div>
               <nav class="navbar navbar-inverse">
                   
                   
                   <ul class=" nav navbar-nav ">
                        <Link to="/signin" ><li className="navbar-btn btn btn-primary" >Sign In</li></Link>
                        <Link to="/signup" ><li className="navbar-btn btn btn-primary">Sign Up</li></Link>
                    </ul>
               </nav>
               
           </div>          
       )   
    }
}

export default Header;
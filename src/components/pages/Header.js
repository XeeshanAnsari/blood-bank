import React from 'react';
import { Link } from 'react-router';



class Header extends React.Component{
    render(){
       return (
           <div>
               <nav class="navbar navbar-inverse">
                   
                   
                   <ul class=" nav navbar-nav ">
                        <li className="navbar-btn btn btn-primary" ><Link to="/s" >Sign In</Link></li>
                        <li className="navbar-btn btn btn-primary"><Link to="" >Sign Up</Link></li>
                    </ul>
               </nav>
               
           </div>          
       )   
    }
}

export default Header;
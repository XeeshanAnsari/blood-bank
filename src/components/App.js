import React from 'react';

import Header from './pages/Header';
import SignInForm from './pages/SignInForm';
import signUp from '../containers/signUp';
import registrationUsers from '../containers/registrationUsers'
import { browserHistory,
    Router,
    Route,
    
    
    
} from 'react-router';

class App extends React.Component{
    render(){
       return (
          <Router history={browserHistory}>
            <Route path="/" component={Header} />
             <Route path="/signup" component={signUp} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/registration" component={registrationUsers} />
        </Router>  
       )   
    }
}


export default App;
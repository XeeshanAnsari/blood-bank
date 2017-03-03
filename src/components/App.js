import React from 'react';

import Header from './pages/Header';
import logIn from '../containers/logIn';
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
            <Route path="/login" component={logIn} />
            <Route path="/registration" component={registrationUsers} />
        </Router>  
       )   
    }
}


export default App;
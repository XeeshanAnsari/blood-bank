import React from 'react';

import Header from './pages/Header';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import donerForm from './pages/donerForm'
import { browserHistory,
    Router,
    Route,
    
    
    
} from 'react-router';

class App extends React.Component{
    render(){
       return (
          <Router history={browserHistory}>
            <Route path="/" component={Header} />
             <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/donerForm" component={donerForm} />
        </Router>  
       )   
    }
}


export default App;
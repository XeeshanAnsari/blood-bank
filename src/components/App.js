import React from 'react';

import Header from './pages/Header';
import SignIn from './pages/SignIn';
import { browserHistory,
    Router,
    Route,
    IndexRoute, 
    
    
} from 'react-router';

class App extends React.Component{
    render(){
       return (
          <Router history={browserHistory}>
            <Route path="/" component={Header}>
            <IndexRoute  component={Header}/>
             
            
            </Route>
            <Route path="/s" component={SignIn} />
        </Router>  
       )   
    }
}


export default App;
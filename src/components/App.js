import React from 'react';

import Header from './pages/Header';
import { hashHistory,
    Router,
    Route,
    IndexRoute, 
    
    
} from 'react-router';

class App extends React.Component{
    render(){
       return (
          <Router history={hashHistory}>
            <Route path="/" component={Header}>
            <IndexRoute />
            
            </Route>
        </Router>  
       )   
    }
}


export default App;
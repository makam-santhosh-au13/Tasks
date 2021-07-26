import React from 'react';
import Posts from '../components/Posts';
import Navbar from '../components/Navbar';
import {Switch,Route as Route} from 'react-router-dom';


const MainRouter =() =>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Navbar} />
                <Route exact path="/posts" component={Posts} />
            </Switch>    
        </div>
    )
  
}


export default MainRouter;
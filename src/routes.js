import { Switch, Route, Redirect} from "react-router-dom";
import React, {useContext} from 'react';
import {AuthContext} from './Context/AuthContext';
import Login from './Components/Auth/Login';
import Portal from './Components/Portal/Portal';
// import Forgot from './Components/Auth/Forgot'
// import Reset from './Components/Auth/Reset';
import Register from './Components/Auth/Register';

const Routes = (props) =>{
   const {user} = useContext(AuthContext)

   return(
      <>
         <Switch>
            <Route exact path='/' component={Login} render={props => <Login {...props} />}/>
            <Route path="/Register" component={Register} render={props => <Register {...props} />}/>
            {/* <Route exact path="/password/forgot" component={Forgot}/> */}
            {/* <Route exact path="/password/reset/:email/:token" exact component={Reset} /> */}
            
            {/* {!user ? (
               <Redirect
                  to={{
                     pathname: "/",
                  }}
               />
            ): null} */}
            <Route path="/portal" component={Portal} render={props => <Portal {...props} />}/>
            {/* <Redirect to='/admin/Login'/> */}
            
         </Switch>
      </>
   )
}
export default Routes;
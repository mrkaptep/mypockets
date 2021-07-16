import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import { Switch, Route, Redirect} from "react-router-dom";
// import EditUser from '../User/EditUser';
// import Users from '../User/User';
import Register from '../Auth/Register';
import Home from '../Home/Home';

import './Portal.scss'



const Portal = (props) => {
   const {user} = useContext(AuthContext)

   return(
      <div className="mainContainer">
         <Switch>
            {user.APP_ACCESS !== 'portal' ? (
               <Route exact path ="/portal/home" component={Home}/>
            ): null} 

            {/* User Routes */}
            {user.APP_ACCESS === 'admin' || 'root' ? (
               <Route path="/portal/Register" component={Register} render={props => <Register {...props} />}/>
               ): null}
            {/* {user.APP_ACCESS === 'admin' || 'root' ? (
               <Route exact path="/portal/Users" component={Users}/>
            ): null}
            <Route exact path="/portal/Users/Edit/:USER_NUMBER" component={EditUser}/> */}

         {user.APP_ACCESS !== 'portal' ? (
         <Redirect to={{pathname: "/portal/home"}}/>
         ): null}
         </Switch>

      </div>
   )
}
export default Portal;
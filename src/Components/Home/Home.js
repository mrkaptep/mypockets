import React, {useContext} from 'react';
import{useHistory} from "react-router-dom";
import {AuthContext} from '../../Context/AuthContext';

import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Home.scss'


const Home = (props) => {
   const {user, logout}  = useContext(AuthContext)
   const {push} = useHistory()

   return(
      <div className='homeContainer'>
         Hello
      </div>
   )

}

export default Home;
import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './Login.scss';

const Login = () => {
   const [USERNAME, setUserName] = useState("")
   const [PASSWD, setPassword] = useState("")
   const {login, loginError} = useContext(AuthContext)

   const [visible, setVisiblity] = useState(false);
   const InputType = visible ? "text" : "password";

   return (
      <div className='form'>
         <form className='login-form' onSubmit={(event)=>{
            event.preventDefault();
            login({USERNAME, PASSWD})
         }}>
            <img 
               className='login-logo' 
               src="https://github.com/mrkaptep/mypockets/blob/main/public/B41CB3C3-3408-47E6-8BEC-0BEDADE223E7_4_5005_c.jpeg"
               alt="my pockets logo"
            />
            <input variant="outlined"
               placeholder='Username'
               className='input-field'
               required
               id="USERNAME"
               label="USERNAME"
               name="USERNAME"
               autoComplete="USERNAME"
               value={USERNAME}
               onChange={(e) => setUserName(e.target.value)}
            />
            <div className="pwHideContainer">
               <input variant="outlined"
                  placeholder='Password'
                  className='pw-input-field'
                  required
                  name="password"
                  label="Password"
                  type={InputType}
                  id="password"
                  autoComplete="current-password"
                  value={PASSWD}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  className="pwHideBtn"
                  type="button" 
                  onClick={() => setVisiblity(visible => !visible)}
                  id="eye"
               >
                  {visible?
                     <VisibilityOffIcon/>
                     :
                     <VisibilityIcon/>
                  }
               </button>
            </div>
            
            <button  type='submit'
                  className='login-btn'>Sign in
            </button>
            {loginError?
               <div className='loginError'>
                  The username or password is incorrect.
               </div>
            :null}
            <div className='forgotPW'>
               <Link to='/password/forgot' className='forgotPW-links'>
                        Forgot Password
               </Link>
            </div>
         </form>
      </div>
   );
}

export default Login;
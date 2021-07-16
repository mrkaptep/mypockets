import React,{useState,useContext,} from 'react'
import {AuthContext} from '../../Context/AuthContext';
import './Forgot.scss'

const Forgot  = ()=>{
   const [EMAIL, setEmail] = useState("")

   const {forgotPassword, checkEmail} = useContext(AuthContext)

   return(
      <div className='forgotContainer'>
         {checkEmail?
            <form className='forgotPW-form' >
               <img 
                  className='forgot-logo' 
                  src="https://us.avannis.com/wp-content/uploads/2018/05/unnamed-1.png"
                  alt="avannis logo"
               />
               <div className='checkEmailText'>
                  Please Check Your Email 
               </div>
            </form>
            :
         <form 
            className='forgotPW-form' 
            onSubmit={(event)=>{
               event.preventDefault();
               forgotPassword(EMAIL);
            }}
            >
            <img 
               className='forgot-logo' 
               src="https://us.avannis.com/wp-content/uploads/2018/05/unnamed-1.png"
               alt="avannis logo"
            />
            <label className='forgotEmail'>
               <span className='forgotLabel'> Please enter your email to reset password. </span>
               <input
                  className='forgotPW-input-field'
                  type="text"
                  placeholder="email"
                  value={EMAIL}
                  onChange={(e)=>setEmail(e.target.value)}
               />
            </label>
            <button
               type='submit'
               className='forgotButton'
            >
               Reset Password
            </button>
            
         </form>
         }
      </div>

   )
}

export default Forgot;
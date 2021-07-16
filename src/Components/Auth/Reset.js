import React, {useContext, useState} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import {ResetPWSchema} from '../../sharedUtils/validationUtils';
import { Formik, Form, Field} from 'formik';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './Reset.scss'


const Reset = (props) => {
   const {resetPassword} = useContext(AuthContext)
   const [visible, setVisiblity] = useState(false);
   const InputType = visible ? "text" : "password";


   return (
      <div className='resetContainer'>
         <Formik
            initialValues={{
               PASSWD: "",
               ConfirmPASSWD: "",
               EMAIL: props.match.params.email,
               RESET_TOKEN:props.match.params.token, 
            }} 
            validationSchema={ResetPWSchema}
            onSubmit={values => {
               resetPassword(values);
         }}
         >
            {({ errors, touched }) => (
               <Form className='reset-pw-form' >
                  <img 
                     className='reset-logo' 
                     src="https://us.avannis.com/wp-content/uploads/2018/05/unnamed-1.png"
                     alt="avannis logo"
                  />
                  <label className='resetBox'>
                     <span className='resetLabel'>Password</span>
                     <div className="pwHideContainer">
                        <Field variant="outlined"
                           placeholder='Please Enter New Password'
                           className={'reset-input-field' + (errors.PASSWD && touched.PASSWD ? ' is-invalid' : '')}
                           required
                           name="PASSWD"
                           label="PASSWD"
                           type={InputType}
                           id="PASSWD"
                        />
                        <button
                           className="pwResetHideBtn"
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
                  </label>
                  
                  <label className='resetBox'>
                     <span className='resetLabel'>Confirm Password</span>
                     <div className="pwHideContainer">
                        <Field variant="outlined"
                           placeholder='Please Confirm Password'
                           className={'reset-input-field' + (errors.ConfirmPASSWD && touched.ConfirmPASSWD ? ' is-invalid' : '')}
                           required
                           name="ConfirmPASSWD"
                           label="ConfirmPASSWD"
                           type={InputType}
                           id="ConfirmPASSWD"
                           autoComplete="ConfirmPASSWD"
                        />
                        <button
                           className="pwResetHideBtn"
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
                  </label>
                  <div className='resetpwNote'>* Must Contain 12 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character</div>
                  <button  
                     type='submit'
                     className='resetButton'
                  >Reset
                  </button>
               </Form>
            )}
         </Formik>       
      </div>
   );
}

export default Reset;
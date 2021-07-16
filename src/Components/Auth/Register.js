import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import './Register.scss'
import {SignupSchema} from '../../sharedUtils/validationUtils'

const Register = () => {
   const {register} = useContext(AuthContext);

   return (
         <div className='registerContainer'>
            <Formik 
               initialValues={{
                  COMPANY_NAME: "",
                  CONTACT_FNAME: "",
                  CONTACT_LNAME: "",
                  USERNAME: "",
                  PASSWD: "",
                  ConfirmPASSWD: "",
                  EMAIL: ""
               }} 
               validationSchema={SignupSchema}
               onSubmit={values => {
                  register(values);
               }}
            >
               {({ errors, touched }) => (
                  <Form className='register-form'>
                  <img 
                     className='register-logo' 
                     src="https://us.avannis.com/wp-content/uploads/2018/05/unnamed-1.png"
                     alt="avannis logo"
                  />
                  
                  <Field
                     placeholder='Company Name'
                     className={'register-input-field'+ (errors.COMPANY_NAME && touched.COMPANY_NAME ? ' is-invalid' : '')}
                     name="COMPANY_NAME"
                     id="COMPANY_NAME"
                     label="COMPANY NAME"
                     required
                  />
                  <Field
                     placeholder='First Name'
                     className={'register-input-field'+ (errors.CONTACT_FNAME && touched.CONTACT_FNAME ? ' is-invalid' : '')}
                     name="CONTACT_FNAME"
                     id="CONTACT_FNAME"
                     label="CONTACT_FNAME"
                     required
                  />
                  <Field
                     placeholder='Last Name'
                     className={'register-input-field'+ (errors.CONTACT_LNAME && touched.CONTACT_LNAME ? ' is-invalid' : '')}
                     required
                     id="CONTACT_LNAME"
                     label="CONTACT_LNAME"
                     name="CONTACT_LNAME"
                  />
                  <Field
                     placeholder='Email Address'
                     className={'register-input-field'+ (errors.EMAIL && touched.EMAIL ? ' is-invalid' : '')}
                     required
                     id="EMAIL"
                     label="EMAIL"
                     name="EMAIL"
                     autoComplete="EMAIL"
                  />
                  <Field
                     placeholder='Username'
                     className={'register-input-field'+ (errors.USERNAME && touched.USERNAME ? ' is-invalid' : '')}
                     required
                     id="USERNAME"
                     label="USERNAME"
                     name="USERNAME"
                     autoComplete="USERNAME"
                  />
                  <Field
                     placeholder='Password'
                     className={'register-input-field'+ (errors.PASSWD && touched.PASSWD ? ' is-invalid' : '')}
                     required
                     name="PASSWD"
                     label="PASSWD"
                     type="password"
                     id="PASSWD"
                  />
                  
                  <Field
                     placeholder='Confirm Password'
                     className={'register-input-field'+ (errors.ConfirmPASSWD && touched.ConfirmPASSWD ? ' is-invalid' : '')}
                     required
                     name="ConfirmPASSWD"
                     label="ConfirmPASSWD"
                     type="password"
                     id="ConfirmPASSWD"
                  />
                  
                  <div className='pwNote'>* Must Contain 12 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character</div>
                  
                  <button  
                     type='submit'
                     className='register-btn'>Register
                  </button>

                  </Form>
               )}
            </Formik>
         </div>
   );
}

export default Register;
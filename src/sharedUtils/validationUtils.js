
const yup = require('yup');

let SignupSchema = yup.object().shape({
   COMPANY_NAME: yup.string().required("This field is required."),
   CONTACT_FNAME: yup.string().required("This field is required."),
   CONTACT_LNAME: yup.string().required("This field is required."),
   USERNAME: yup.string().required("This field is required."),
   PASSWD: yup
      .string()
      .required("This field is required.")
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
         "Must Contain 12 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
   ConfirmPASSWD: yup
      .string()
      .oneOf([yup.ref('PASSWD'), null], 'Passwords must match')
      .required('Confirm Password is required'),
   EMAIL: yup
   .string()
   .email("Invalid email")
   .required("This field is required."),
});

let UpdateUserSchema = yup.object().shape({
   COMPANY_NAME: yup.string().required("This field is required."),
   CONTACT_FNAME: yup.string().required("This field is required."),
   CONTACT_LNAME: yup.string().required("This field is required."),
   USERNAME: yup.string().required("This field is required."),
   EMAIL: yup
      .string()
      .email("Invalid email")
      .required("This field is required."),
});

let ResetPWSchema = yup.object().shape({
   PASSWD: yup
      .string()
      .required("This field is required.")
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
         "Must Contain 12 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
   ConfirmPASSWD: yup
      .string()
      .oneOf([yup.ref('PASSWD'), null], 'Passwords must match')
      .required('Confirm Password is required'),
});

module.exports = {
   SignupSchema,
   UpdateUserSchema,
   ResetPWSchema
}
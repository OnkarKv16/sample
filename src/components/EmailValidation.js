import validator from 'validator'

const EmailValidation = (values) => {
    let errors = {}
    if (values.email.length === 0) {
        errors.email = "Email is required";
        console.log(errors.email);
        // toast.error("Email is required")
    } else if (!validator.isEmail(values.email)) {
        errors.email = "please enter valid email";
    }
    return errors;
}

export default EmailValidation;
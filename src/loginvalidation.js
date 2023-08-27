import { toast } from "react-toastify"
import validator from 'validator'

const loginvalidation=(values)=>{
    let errors={}
    if (values.email.length === 0) {
        errors.email = "Email is required";
        console.log(errors.email);
       // toast.error("Email is required")
    } else if (!validator.isEmail(values.email)) {
        errors.email = "please enter valid email";
    }

    if (values.password.length === 0) {
        errors.password = "Password is required";
        console.log(errors.password);
        //toast.error("Password is required")
    }
    return errors;
}

export default loginvalidation;
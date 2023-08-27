
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'

const passwordValidation = (values) => {
    let errors = {}
    if (values.password === "") {
        errors.password = "Password is required";
        console.log(errors.password);
        // toast.error("Password is required")
    } else if (!validator.isStrongPassword(values.password, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
        errors.password = "Is not Strong Password";
    }


    if (values.cpassword.length === 0) {
        errors.cpassword = "Confirm Password is required";
        console.log(errors.cpassword);
        //toast.error("Confirm Password is required")
    }
    if (values.password && values.cpassword && values.password !== values.cpassword) {
        errors.cpassword = "Password does not match";
        console.log(errors.cpassword);
        //toast.error("Password does not match");
    }

    return errors;
}

export default passwordValidation;

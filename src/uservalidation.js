import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'

const uservalidation = (values) => {
    let errors = {}

    if (values.name.length === 0) {
        errors.name = "Name is required";
        console.log(errors.name);
        // toast.error("Name is required")
    }else if(values.name.search(/^[a-zA-Z ]{2,40}$/)){
        errors.name = "Enter valid name";
    }

    if (values.city.length === 0) {
        errors.city = "City is required";
        console.log(errors.city);
        // toast.error("City is required")
    }

    if (values.phone.length === 0) {
        errors.phone = "Phone number is required";
        console.log(errors.city);
        // toast.error("City is required")
    } else if (values.phone.search(/^\d{10}$/)) {
        errors.phone = "please enter valid phone number";
    }

    if (values.email === "") {      //npm install validator (used library) 
        errors.email = "Email is required";
        console.log(errors.email);
        // toast.error("Email is required")
    } else if (!validator.isEmail(values.email)) {
        errors.email = "please enter valid email";
    }

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

export default uservalidation;
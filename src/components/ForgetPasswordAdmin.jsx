import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import user1 from "../images/user1.jpg";
import swal from 'sweetalert';
import EmailValidation from "./EmailValidation";

function ForgetPasswordAdmin() {
    const [user, setUser] = useState({
        "email": "",
        "otp": "",
        "generatedOtp": ""
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(EmailValidation(user))
        setSubmitted(true)
    }

    const handleSubmitNavigate = e => {
        e.preventDefault()
        console.log(user.otp);
        if (user.otp!="" && user.otp === user.generatedOtp) {
            swal({
                title: "Success!",
                text: "Email verified Successfully",
                icon: "success",
                button: "OK",
            });
            navigate('/resetPassAdmin');
        } else {
            swal({
                title: "Error!",
                text: "Access Denied! Invalid OTP!",
                icon: "error",
                button: "OK",
            });
            setUser({...user,[user.email ]: "",
            [user.otp] :"",
            [user.generatedOtp]:""})
            console.log(user);
        }
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(user)
            axios.post("http://localhost:8080/api/admin/forgetpassword", user)
                .then(resp => {
                    let result = resp.data.data;
                    swal({
                        title: "Success!",
                        text: "OTP Sent Successfully!",
                        icon: "success",
                        button: "OK",
                    });
                    sessionStorage.setItem("email", result.email)
                    setUser({ ...user, generatedOtp: result.otp })
                    console.log(user);
                    setSubmitted(false)
                })
                .catch(error => {
                    console.log("Error", error);
                    swal({
                        title: "Error!",
                        text: "Access Denied! Invalid Email!",
                        icon: "error",
                        button: "OK",
                    });
                    setSubmitted(false)
                })
        }
    }, [errors])

    return (
        <div className="container-fluid w-50 mt-5 login-component" >
            <div
                className="row shadow bg-white border rounded"
            >
                <div className="col-4 ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6195/6195696.png"
                        className="rounded-start img-fluid mt-5"
                        style={{ width: "300px" }}
                    ></img>
                </div>

                <div className="col-8">
                    <div className="border border-0 rounded p-2">
                        <h2 className="fw-bold mb-2 mt-2 text-uppercase"> Forget Password</h2>

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <label><i className="fa fa-envelope pr-2"></i>Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInput}
                                        className="form-control form-control-sm"
                                        placeholder="name@example.com"
                                    />
                                    {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
                                </div>
                                <button className="btn btn-primary float-center">Verify Email</button>
                            </form>
                            <form onSubmit={handleSubmitNavigate}>
                                <div className="form-floating mb-3">
                                    <label><i className="fa fa-lock pr-2"></i>OTP</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        name="otp"
                                        value={user.otp}
                                        onChange={handleInput}
                                        placeholder="otp"
                                    />
                                </div>
                                <button className="btn btn-primary float-center"> Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ForgetPasswordAdmin;
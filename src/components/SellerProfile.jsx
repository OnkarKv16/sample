import axios from "axios"
import { useEffect, useState } from "react"
import swal from 'sweetalert';
import uservalidation from "../uservalidation";
import { useDispatch } from "react-redux";
import validator from 'validator'
import { useNavigate } from "react-router-dom";

function SellerProfile() {
    const [uname, setUname] = useState(sessionStorage.getItem("uname"))
    const id = sessionStorage.getItem("id")
    const [user, setUser] = useState({
        "id": sessionStorage.getItem("id"),
        "name": "",
        "city": "",
        "email": "",
        "password": "",
        "phone": ""
    })

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8080/api/sellers/" + id)
            .then(resp => {
                console.log(resp.data.data)
                setUser(resp.data.data)
            })
    }, [errors])

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    window.onbeforeunload = function () {
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function () {
        console.log("onload")
        if (window.location.href == sessionStorage.getItem("origin")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //uservalidation is not returrning values so writing code here
        if (user.city === "") {
            setErrors(errors.city = "Gender is required")
        }

        if (user.name === "") {
            setErrors(errors.name = "Name is required")
        } else if (user.name.search(/^[a-zA-Z ]{2,40}$/)) {
            setErrors(errors.name = "Enter valid name")
        }

        // if(user.phone === ""){
        //     setErrors(errors.phone = "phone number is required")
        // }else if(user.phone.search(/^\d{10}$/)){
        //     setErrors(errors.phone = "Enter valid phone number")
        // }

        if (user.email === "") {      //npm install validator (used library) 
            setErrors(errors.email = "Email is required");
            console.log(errors.email);
            // toast.error("Email is required")
        } else if (!validator.isEmail(user.email)) {
            errors.email = "please enter valid email";
        }

        if (!user.gender) {     //as gender is only included in gender
            let obj = {};
            obj.gender = "Gender is required"
            setErrors(obj);
        }

        if (user.password === "") {
            setErrors(errors.password = "Password is required");
            console.log(errors.password);
            // toast.error("Password is required")
        } else if (!validator.isStrongPassword(user.password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrors(errors.password = "Is not Strong Password");
        }

        console.log(user);
        if (Object.keys(errors).length === 0) {
            axios.put("http://localhost:8080/api/customers/" + id, user)
                .then(resp => {
                    swal({
                        title: "Success!",
                        text: "Profile updated successfully!",
                        icon: "success",
                        button: "OK",
                    });
                    setUname(user.name)
                })
        } else {
            swal({
                title: "Error!",
                text: "Please enter valid information!",
                icon: "error",
                button: "OK",
            });
            setErrors({})
        }
    }
    return (

        <div className="container text-white">
            <div className="row">
                <div className="col-sm-7 mx-auto">
                    <div className="card shadow bg-light mt-3">
                        <div className="card-body">
                            <h4 className="p-2 text-center text-dark">SELLER PROFILE</h4>
                            <h4 className="p-2 text-center text-dark" style={{ borderBottom: "2px solid black", width: "600px", margin: "auto" }}>Welcome {uname}</h4>

                            <br />
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-dark"><i className="fa fa-user-circle-o pr-2"></i>Seller Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-dark"><i className="fa fa-address-card pr-2"></i>City</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-dark"><i className="fa fa-envelope pr-2"></i>Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" name="email" value={user.email} onChange={handleInput} className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-dark"><i className="fa fa-phone pr-2"></i>Phone</label>
                                    <div className="col-sm-8">
                                        <input type="tel" minLength="10" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label text-dark"><i className="fa fa-unlock pr-2"></i>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="password" value={user.password} onChange={handleInput} className="form-control" />
                                    </div>
                                </div>
                                <button className="btn btn-primary float-right ">Update Profile</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProfile;

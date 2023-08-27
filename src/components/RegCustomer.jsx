import { useEffect, useState } from "react"
import axios from "axios"
import uservalidation from "../uservalidation";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import admin from "../images/admin.png";
function RegCustomer() {

    const [customer, setCustomer] = useState({

        "name": "",
        "city": "",
        "email": "",
        "phone": "",
        "gender": "",
        "password": "",
        "cpassword": ""

    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false)

    const handleInput = (event) => {

        setCustomer({ ...customer, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        setErrors(uservalidation(customer))
        if (!customer.gender) {     //as gender is only included in gender
            let obj = {};
            obj.gender = "Gender is required"
            setErrors(obj);
        }
        setSubmitted(true)

    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(customer)


            axios.post("http://localhost:8080/api/customers", customer)
                .then(resp => {
                    console.log(resp)
                    swal({
                        title: "Success!",
                        text: "Customer registered successfully",
                        icon: "success",
                        button: "OK",
                    });
                    navigate('/clogin');
                }).catch(error => {
                    console.log("Error", error)
                    swal({
                        title: "Error!",
                        text: "You already have an account! Please login !",
                        icon: "error",
                        button: "OK",
                    });
                    setCustomer({
                        ...customer,
                        "name": "",
                        "city": "",
                        "email": "",
                        "phone": "",
                        "gender": "",
                        "password": "",
                        "cpassword": ""
                    })
                })


        }

    }, [errors])

    return (
        <div className="container">
            <div className="card shadow  mt-3 text-black">
                <div className="card-body" style={{width:"100%"}}>
                    <div className="row">
                    <div className="col-3 ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2247/2247728.png"
                        className="rounded-start img-fluid mt-5"
                        style={{ width: "300px" }} />
                </div>
                        <div className="col-sm-6 mx-auto">
                            <h4 className="text-center p-2">
                                Customer Registration Form
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label "><i className="fa fa-user-circle-o pr-2"></i>Customer Name</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="name"
                                            placeholder="Enter Your Name"
                                            value={customer.name}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.name && <medium className="text-danger float-right">{errors.name}</medium>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-address-card pr-2"></i>City</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="city"
                                            placeholder="Enter city Name"
                                            value={customer.city}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.city && <medium className="text-danger float-right">{errors.city}</medium>}
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="email"
                                            placeholder="Enter Your E-mail"
                                            value={customer.email}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-phone pr-2"></i>Phone</label>
                                    <div className="col-sm-8">
                                        <input type="number"
                                            maxLength="10"
                                            minLength="10" name="phone"
                                            placeholder="Enter mobile number"
                                            value={customer.phone}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.phone && <medium className="text-danger float-right">{errors.phone}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-male pr-2"></i>Gender</label>
                                    <div className="col-sm-8">
                                        <select name="gender" value={customer.gender} onChange={handleInput} className="form-control">
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        {errors.gender && <medium className="text-danger float-right">{errors.gender}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-unlock-alt pr-2"></i>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password"
                                            name="password"
                                            placeholder="confirm password"
                                            value={customer.password}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Confirm Password</label>
                                    <div className="col-sm-8">
                                        <input type="password"
                                            name="cpassword"
                                            placeholder="Re-confirm password"
                                            value={customer.cpassword}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.cpassword && <medium className="text-danger float-right">{errors.cpassword}</medium>}
                                    </div>
                                </div>
                                <div className="text-center ml-auto ">
                                    <Link className="text-white" to="/clogin">Already have an account?</Link>
                                </div>
                                <button className="btn btn-primary mt-3 w-100 ">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegCustomer;
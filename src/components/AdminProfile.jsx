import axios from "axios"
import { useState } from "react"
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminProfile() {
    const email = sessionStorage.getItem("email")
    const uname = sessionStorage.getItem("uname")
    const navigate=useNavigate();
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        "uname": uname,
        "email": email,
        "password": ""
    })

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    window.onbeforeunload = function(){
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function(){
        if(window.location.href == sessionStorage.getItem("origin")){
            dispatch({ type: 'IsLoggedIn' })
            //sessionStorage.clear();
            //navigate("/alogin");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/admin", user)
            .then(resp => {
                console.log(resp)
                swal({
                    title: "Success!",
                    text: "Profile updated successfully!",
                    icon: "success",
                    button: "OK",
                });
                sessionStorage.setItem("uname", user.uname)
            })
            .catch(error => {
                console.log("Error", error)
                swal({
                    title: "Error!",
                    text: "Update Failed!",
                    icon: "error",
                    button: "OK",
                });
            })
    }

    return (
        <div className="container-fluid">
            <h4 className="p-2 mt-3 text-black text-center">Welcome {user.uname}</h4>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <div className="card shadow bg-white">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="email" readOnly value={user.email} onChange={handleInput} className="form-control " />
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-user-circle-o pr-2"></i>User Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="uname" value={user.uname} onChange={handleInput} className="form-control " />
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label "><i className="fa fa-unlock pr-2"></i>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="password" value={user.password} onChange={handleInput} className="form-control " />
                                    </div>
                                </div>
                                <button className="btn btn-primary float-right">Update Profile</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminProfile;

import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import validator from 'validator'

const Feedback = () => {
  const uname = useState(sessionStorage.getItem("uname"))
  const emailId = sessionStorage.getItem("email")
  const id = sessionStorage.getItem("id")

  const [user, setUser] = useState({
    "customerId": id,
    "name":uname,
    "email": emailId,
    "message": "",
    "rating": "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    if (user.email === "") {
      setErrors(errors.email = "Email is required");
    } else if (!validator.isEmail(user.email)) {
      setErrors(errors.email = "please enter valid email");
    }

    if (user.rating.length < 1) {
      setErrors(errors.rating = "Rating is required");
    } else if (user.rating > 5 || user.rating < 1) {
      setErrors(errors.rating = "please enter valid rating");
    }

    if (user.message.length < 1) {
      setErrors(errors.message = "message is required");
    }
    

    if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:8080/api/customers/feedback/" + { id }, user)
        .then(resp => {
          console.log("Feedback Submitted");
          swal({
            title: "Success!",
            text: "Feedback submited successfully!",
            icon: "success",
            button: "OK",
          });
          dispatch({type:'IsLoggedIn'})
          setErrors({})
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
    <div className="container text-black">
      <div className="row">
        <div className="col-sm-7 mx-auto">
          <div className="card shadow bg-transparent mt-3">
            <div className="card-body">

              <h4 className="p-2 text-center text-dark">Feedback</h4>
              <form onSubmit={handleSubmit}>
              <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Name :</label>
                  <div className="col-sm-8">
                    <input type="text" name="name" readOnly value={user.name} onChange={handleInput} className="form-control" />
                  </div>
                </div>
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email :</label>
                  <div className="col-sm-8">
                    <input type="email" name="email" readOnly value={user.email} onChange={handleInput} className="form-control" />
                  </div>
                </div>
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label"><i className="fa fa-star pr-2"></i>Rating in 1 to 5</label>
                  <div className="col-sm-8">
                    <input required type="rating" name="rating" value={user.rating} onChange={handleInput}
                      className="form-control" placeholder="1 to 5"></input>
                  </div>
                </div>
                <div className="form-group form-row">
                  <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Message :</label>
                  <div className="col-sm-8">
                    <input type="text" name="message" value={user.message} onChange={handleInput} className="form-control" />
                  </div>
                </div>
                <button className="btn btn-primary float-right">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback;
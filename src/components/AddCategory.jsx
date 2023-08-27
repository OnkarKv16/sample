import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import swal from 'sweetalert';
// import catPhoto from '../images/category.png'
import { useDispatch } from "react-redux";

function AddCategory() {

    const [category, setcategory] = useState({
        "categoryName": "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (event) => {

        setcategory({ ...category, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(category)

        axios.post("http://localhost:8080/api/category/addcategory", category)
            .then(resp => {
                console.log(resp)
                swal({
                    title: "Success!",
                    text: "Category added successfully",
                    icon: "success",
                    button: "OK",
                });
                navigate('/');
            }).catch(error => {
                console.log(error)
                swal({
                    title: "Error!",
                    text: "Failed to add category!",
                    icon: "error",
                    button: "OK",
                });
                setcategory({
                    ...category,
                    "categoryName": "",
                })
            })
    }

    window.onbeforeunload = function () {
        sessionStorage.setItem("addCategory", window.location.href);
    }

    window.onload = function () {
        if (window.location.href === sessionStorage.getItem("addCategory")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    return (
        <div className="container-fluid w-50 mt-5 login-component " >
            <div className="row shadow bg-transparent border rounded">
                <div className="col-4 ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6724/6724302.png"
                        className="rounded-start img-fluid mt-2 mb-3"
                        style={{ width: "100 x" }} alt="category" />
                </div>

                <div className="col-8">
                    <div className="border border-0 rounded p-2">
                        <h2 className="fw-bold mb-2 mt-2 text-uppercase"> Add Category</h2>

                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3 ">
                                    
                                    <input
                                        type="text"
                                        name="categoryName"
                                        placeholder="Enter category Name"
                                        value={category.categoryName}
                                        onChange={handleInput}
                                        className="form-control form-control-sm mt-2"
                                    />
                                </div>
                                <button className="btn btn-primary float-center mt-3">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory;
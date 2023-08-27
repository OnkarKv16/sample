import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productvalidation from "./productvalidation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';


function EditProduct() {
    console.log("Edit product page")
    const sellerid = sessionStorage.getItem("id")
    console.log(sellerid);
    const { productId } = useParams()
    const [product, setProduct] = useState({
        "productId": productId,
        "pname": "",
        "categoryName": "",
        "price": "",
        "brand": "",
        "sellerId": sellerid
    })

    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [category, setCategory] = useState([]);

    const handleInput = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(productvalidation(product))
        setSubmitted(true)
    }

    const handleFileInput = e => {
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))
    }


    window.onbeforeunload = function () {
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function () {
        if (window.location.href == sessionStorage.getItem("origin")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    useEffect(() => {
        console.log(errors)

        axios.get("http://localhost:8080/api/category/getallcategory")
            .then(resp => {
                console.log(resp);
                setCategory(resp.data);
                console.log("GetAllCategory");
            }).catch(error => {
                toast.error("Category unable to fetch")
            }, [])

        axios.get("http://localhost:8080/api/products/" + productId)
            .then(resp => {
                console.log(resp.data.data)
                setProduct(resp.data.data)
            })

        if (Object.keys(errors).length === 0 && submitted ) {
            console.log(product)
            axios.put("http://localhost:8080/api/products/" + productId, product)
                .then(resp => {
                    let result = resp.data.data;
                    console.log(result)
                    swal({
                        title: "Done!",
                        text: "Product saved successfully",
                        icon: "success",
                        button: "OK",
                    });
                    navigate("/myproducts")
                })
                .catch(error => {
                    console.log("Error", error);
                    swal({
                        title: "Error!",
                        text: "Error saving product",
                        icon: "error",
                        button: "OK",
                    });
                })
        } 

    }, [errors])
    return (
        <div className="container mt-5">
            <div className="card shadow bg-transparent text-dark">
                <div className="card-body">
                    <div className="row">
                        <div class="col-sm-4 pt-5">
                            <img width="300" src={"http://localhost:8080/" + product.photo} alt="Photo" />
                        </div>
                        <div className="col-sm-6">
                            <h4 className="text-center p-2">
                                Edit Product :
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Product Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="pname" value={product.pname} onChange={handleInput} className="form-control" />
                                        {errors.pname && <medium className="text-danger float-right">{errors.pname}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Category</label>
                                    <div className="col-sm-8">
                                        <select name="categoryName" value={product.categoryName} onChange={handleInput} className="form-control">
                                            <option value="">please select</option>
                                            {category.map(cat => (
                                                <option>{cat.categoryName}</option>
                                            ))}
                                        </select>
                                        {errors.categoryName && <medium className="text-danger float-right">{errors.categoryName}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Price</label>
                                    <div className="col-sm-8">
                                        <input type="number" name="price" value={product.price} onChange={handleInput} className="form-control" />
                                        {errors.price && <medium className="text-danger float-right">{errors.price}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Brand</label>
                                    <div className="col-sm-8">
                                        <select name="brand" value={product.brand} onChange={handleInput} className="form-control">
                                            <option value="">Select Brand</option>
                                            <option>IKEA</option>
                                            <option>Godrej</option>
                                            <option>Zuari</option>
                                            <option>Durian</option>
                                            <option>Others</option>
                                        </select>
                                        {errors.brand && <medium className="text-danger float-right">{errors.brand}</medium>}
                                    </div>
                                </div>

                                <button className="btn btn-primary float-right">Upload Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;

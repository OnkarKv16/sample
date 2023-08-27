import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";
import queryString from "query-string";
import TopSlider from "./TopSlider";
import { toast } from "react-toastify";
import swal from "sweetalert";

function AllProduct() {
    const [products, setProducts] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const state = useSelector((state) => state);
    const location = useLocation()
    const [item, setItem] = useState({})
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showDialog, setShowDialog] = useState("modal fade")
    const [display, setDisplay] = useState("none")

    const showModal = (prod) => {
        setShowDialog("modal fade show")
        setDisplay("block")
        setItem(prod)
    }

    const checkItem = (productId) => {
        return state.cart.findIndex(x => x.productId === productId) < 0
    }

    const closeDialog = () => {
        setShowDialog("modal fade")
        setDisplay("none")
    }

    const loadDataFromServer = (page = 0, pagesize = 8) => {
        axios.get("http://localhost:8080/api/products/paginated?page=" + page + "&pagesize=" + pagesize)
            .then(resp => {
                console.log(resp.data.data.total)
                setProducts(resp.data.data.plist)
                setTotalPage(Math.ceil(resp.data.data.total / pagesize))
                console.log(products)
            })
    }



    useEffect(() => {
        console.log("I am here cat", location.search)
        let pcat = queryString.parse(location.search)
        console.log(pcat.cat)
        if (pcat.cat !== undefined ) {
            console.log("useEffect if part")
            axios.get("http://localhost:8080/api/products/category?cat=" + pcat.cat)
                .then(resp => {
                    console.log(resp.data)
                    setProducts(resp.data.data)
                    console.log(products)
                })
        }
        else {
            loadDataFromServer()
        }
    }, [location])

    const addToCart = item => {
        if (sessionStorage.getItem("email") == null) {
            toast.error("Please login first to buy product",
                { position: toast.POSITION.TOP_CENTER })
            navigate("/clogin")
        }
        else if (sessionStorage.getItem("role") !== "customer") {
            toast.error("Only customer can buy product",
                { position: toast.POSITION.TOP_CENTER })
        }
        else {
            if (checkItem(item.productId)) {
                showModal()
                setDisplay("none")
                setShowDialog("modal fade")
                item.qty = qty
                dispatch({ type: 'AddItem', payload: item })
                swal({
                    title: "Success!",
                    text: "Item added to cart successfully",
                    icon: "success",
                    button: "OK",
                });
            }
            else {
                swal({
                    title: "Error!",
                    text: "Item already in cart",
                    icon: "error",
                    button: "OK",
                });
            }
        }
    }


    const handlePageClick = ({ selected: selectedPage }) => {
        loadDataFromServer(selectedPage)
    }

    return (
        <>
            <div className="container-fluid p-2" >
                <TopSlider />
            </div>
            <div className="container-fluid" style={{ width: "100%" ,background:"#ACBCFF"}}>
                <div className="card shadow bg-transparent">
                    <div className="card-body">

                        <div className="row">
                            {products.map(x => (
                                <Product key={x.productId} x={x} showModal={showModal} />
                            ))}
                        </div>

                    </div>
                </div>
                {display == "block" ? (
                    <div className={showDialog} style={{ zIndex: "1000", display: display }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5>Add to Cart</h5>
                                    <button onClick={closeDialog} className="close">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex">
                                        <img src={"http://localhost:8080/" + item.photo} style={{ width: "250px" }} />
                                        <div className="ml-3">
                                            <h4 className="p-2 text-primary">{item.pname}</h4>
                                            <h5 className="px-2">Brand: {item.brand}</h5>
                                            <h5 className="px-2">Category: {item.categoryName}</h5>
                                            <h5 className="px-2">Seller: {item.sellerName}</h5>
                                            <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                            <input type="number" value={qty} onChange={e => setQty(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={e => addToCart(item)} className="btn btn-primary btn-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>) : ""}
                <ReactPaginate
                    previousLabel={"← Prev"}
                    nextLabel={"Next →"}
                    containerClassName={"pagination"}
                    pageCount={totalPage}
                    onPageChange={handlePageClick}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"} />
            </div>
        </>
    )
}

export default AllProduct;
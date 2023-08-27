
function Product(props) {
    const { x, showModal } = props
    return (
        <div className="col-sm-3" key={x.productId}>
            <div className="card text-center text-white mb-3 bg-primary" style={{ boxShadow: "0 0 3px 3px white" }}>
                <div className="card-header p-1 border-bottom border-white ">
                    <h5 className="text-white">{x.pname}</h5>
                </div>
                <div className="card-body py-1">
                    <img style={{ width: "90%", height: "200px", marginBottom: "10px" }} src={"http://localhost:8080/" + x.photo} className="img-thumnail" />
                    <h6 className="float-left">Brand :{x.brand}</h6>
                    <h6 className="float-right">Price: &#8377; {x.price}</h6>
                </div>
                <div className="card-footer p-1">
                    <button onClick={e => showModal(x)} className="btn btn-success btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function ViewCart(){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [address,setAddress]=useState({
        "city":"",
        "state":"",
        "zip":"",
        "country":""
    })
    const [payment,setPayment]=useState({
        "cardNo":"",
        "nameOnCard":"",
        "cvv":"",
        "amount":state.cart.reduce((a,b)=> (a+b.price),0)       
    })
    const deleteItem=(item)=>{
        let resp=window.confirm('Are you sure to delete this item ?')
        if(resp){        
        dispatch({type:'RemoveItem',payload:item})   
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        console.log("Amount ",amount)
        }
    }
    const handleAddressInput=(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const handlePaymentInput=(e)=>{
        setPayment({...payment,[e.target.name]:e.target.value})
    }
// when page will be refreshed so the user who have loggedin ...the same details will be displayed 
    window.onbeforeunload = function(){
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function(){
        if(window.location.href == sessionStorage.getItem("origin")){
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    useEffect(()=>{
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        setPayment({...payment,'amount':amount}) 
        console.log("Amount => ",amount)
    },[state.cart])

    const handleSubmit=(e)=>{
        e.preventDefault()  
        //setSubmitted(true)
        let amount=state.cart.reduce((a,b)=> (a+b.price),0)
        console.log("Amount ",payment.amount)
        setPayment({...payment,'amount':amount})

        let data={
            'cart':state.cart,
            'payment':payment,
            'address':address,
            'customerId':sessionStorage.getItem('id')
        } 
        console.log(data) 
        axios.post("http://localhost:8080/api/orders",data)
        .then(resp=>{
            console.log(resp)
            dispatch({type:'Clear'});
            swal({
                title: "Success!",
                text: "Order placed successfully",
                icon: "success",
                button: "OK",
            });
            navigate('/myorders')
        })  
    }
    return (
        <div className="container-fluid text-white">
            
            {state.cart.length>0 ? 
            <div className="row">
                <div className="col-sm-7">
                <h4 className="p-2 text-dark text-center">Cart View</h4>
            <table className="table table-bordered table-light table-striped">
                <thead className="text-dark">
                    <tr className="text-center">
                        <th>ProductId</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map(item=>(
                        <tr key={item.productId} className="text-center">
                            <td>{item.productId}</td>
                            <td>
                                <img className="mr-2 float-left" src={"http://localhost:8080/"+item.photo} width="100" />
                                {item.pname}
                            </td>
                            <td>&#8377; {item.price}</td>
                            <td>{item.qty}</td>
                            <td>&#8377; {item.qty * item.price}</td>
                            <td><button onClick={e=>deleteItem(item)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                {state.cart.map(item=>(
                    <tr>
                        <th colSpan="4">Total Amount</th>
                        <th>&#8377; {item.qty * item.price}</th>
                    </tr>
                    ))}
                </tfoot>
            </table>
            </div>
            <div className="col-sm-4">     
            <form onSubmit={handleSubmit} >           
                <h5 className="p-2 text-dark">Address Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">City</label>
                    <div className="col-sm-8">
                        <input type="text" name="city" required value={address.city} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">State</label>
                    <div className="col-sm-8">
                        <input type="text" name="state" required value={address.state} onChange={handleAddressInput} className="form-control" />
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Zip</label>
                    <div className="col-sm-8">
                        <input type="text" name="zip" required value={address.zip} onChange={handleAddressInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Country</label>
                    <div className="col-sm-8">
                        <input type="text" name="country" required value={address.country} onChange={handleAddressInput} className="form-control" />                       
                    </div>                        
                </div>

                <h5 className="p-2 text-dark">Payment Information</h5>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Card No</label>
                    <div className="col-sm-8">
                        <input type="text" name="cardNo" value={payment.cardNo} onChange={handlePaymentInput} className="form-control" minLength="16" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Name on Card</label>
                    <div className="col-sm-8">
                        <input type="text" name="nameOnCard" value={payment.nameOnCard} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Expiry Date</label>
                    <div className="col-sm-8">
                        <input type="month" required currentDate className="form-control" />                        
                    </div>                        
                </div>
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">CVV</label>
                    <div className="col-sm-8">
                        <input type="text" name="cvv" minLength="3" maxLength="3" value={payment.cvv} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>
                {state.cart.map(item=>(
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label text-dark">Billed Amount</label>
                    <div className="col-sm-8">
                        <input type="text" maxLength="3" readOnly value={item.qty * item.price} onChange={handlePaymentInput} className="form-control" />                        
                    </div>                        
                </div>  
                 ))}              
                <button className="btn btn-success float-right">Place Order</button>
                </form>
            </div>
            </div> : <h4 className="text-dark">Cart is Empty</h4>}
        </div>
    )
}

export default ViewCart;
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AllCustomers(){

    const [customers,setCustomers]=useState([])
    const dispatch = useDispatch()

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

    useEffect(()=>{
        axios.get("http://localhost:8080/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    
    return (
        <div className="container-fluid">
            <h4 className="text-dark p-2 text-center">All Customers</h4>
            <table className="table table-bordered table-light table-striped table-hover">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id} className="text-center">
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.phone}</td>
                        <td>{x.email}</td>  
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllCustomers;
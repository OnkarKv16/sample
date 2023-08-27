import { Link, useLocation } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RoleNavbar from "./RoleNavbar"
import { useSelector } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import slide from "../images/1.png"
function NavBar() {
    const state = useSelector((state) => state);
    console.log("LoggedIn ", state.loggedin)
    console.log("Cart ", state.cart)
    const location = useLocation()

    const [category, setCategory] = useState([]);

    useEffect(() => {
        console.log("Welcome to NavBar bro");

        axios.get("http://localhost:8080/api/category/getallcategory")
            .then(resp => {
                console.log(resp);
                setCategory(resp.data);
                console.log("GetAllCategory");
            }).catch(error => {
                toast.error("Category unable to fetch")
            }, [])

    }, [location]);

 
    return (

        <Navbar  expand="lg" className="bg-info position-sticky" style={{ top: 0, zIndex: "1000" }}>
            
            <MDBNavbarBrand href='#'>
            <img
              src={slide}
              height='50'
              width='50'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <Link  className="navbar-brand  text-black" to="/"><b>DailyCart</b>
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link text-black" to="/">HOME</Link>
                    <NavDropdown title={<span className="text-black">CATEGORY</span>} id="basic-nav-dropdown" className="text-light" >
                        <NavDropdown.Item href="#action/3.1">{category.map(cat => (
                            <Link key={cat.categoryId} className="dropdown-item" to={`/cats?cat=${cat.categoryName}`}>{cat.categoryName}</Link>
                        ))}</NavDropdown.Item>
                    </NavDropdown>
                    <Link className="nav-link text-black" to="/aboutUs">ABOUT US</Link>
                    <Link className="nav-link text-black" to="/contactUs">CONTACT US</Link>
                </Nav>
                
                {state.loggedin.IsLoggedIn ?
            <>
                <label className="float-right">Welcome ! {state.loggedin.Username}</label> </> :
            ''} 
               
                
                <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;



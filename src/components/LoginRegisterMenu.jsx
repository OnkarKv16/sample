
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function LoginRegisterMenu() {
    
    return (
        <>
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item dropdown-white ">
                <NavDropdown title={
                    <span className="text-black " >LOGIN</span>} id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/alogin">Admin</Link>
                    <Link className="dropdown-item" to="/slogin">Seller</Link>
                    <Link className="dropdown-item" to="/clogin">Customer</Link>
                </NavDropdown>
            </li >
            <li className="nav-item dropdown">
                <NavDropdown title={
                    <span className="text-black">REGISTER</span>} id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/regsupplier">Seller</Link>
                    <Link className="dropdown-item" to="/register">Customer</Link>
                </NavDropdown>
            </li>
         
        </ul >
        
    </>
    )
}

export default LoginRegisterMenu;
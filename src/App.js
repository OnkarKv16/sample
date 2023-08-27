// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import RegCustomer from "./components/RegCustomer";
import RegSupplier from "./components/RegSupplier";
import AdminLogin from "./components/AdminLogin";
import SellerLogin from "./components/SellerLogin";
import CustomerLogin from "./components/CustomerLogin";
import AddProduct from "./components/AddProduct";
import AllProduct from "./components/AllProducts";
import ForgetPasswordSeller from "./components/ForgetPasswordSeller";
import ForgetPasswordCustomer from "./components/ForgetPasswordCustomer";
import AdminProfile from "./components/AdminProfile";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import About from "./static/About";
import SellerProfile from "./components/SellerProfile";
import CustomerProfile from "./components/CustomerProfile";
import AllSellers from "./components/AllSellers";
import AllCustomers from "./components/AllCustomers";
import Orders from "./components/Orders";
import ViewCart from "./components/ViewCart";
import MyOrders from "./components/MyOrders";
import MyProducts from "./components/MyProducts";
import EditProduct from "./components/EditProduct";
import ResetPassCustomer from "./forgetPassword/ResetPassCustomer";
import ResetPassSeller from "./forgetPassword/ResetPassSeller";
import AddCategory from "./components/AddCategory";
import ForgetPasswordAdmin from "./components/ForgetPasswordAdmin";
import ResetPassAdmin from "./forgetPassword/ResetPassAdmin";
import Feedback from "./components/Feedback";
import ViewFeedback from "./components/ViewFeedback";
import Order from "./components/Order";
import Footer from "./components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Partner from './components/Partners';
import ContactPage from './static/Contact';
import ContactUs from './static/Contact';


function App() {
  return (
    <>
  
    <div className="App">
     
      {/* <Header /> */}
      <BrowserRouter>
        <NavBar />
       
      
        <Routes>
          <Route path="/" exact element={<AllProduct /> } />
          <Route path="/cats" element={<AllProduct />} />
          <Route path="/regsupplier" element={<RegSupplier />} />
          <Route path="/register" element={<RegCustomer />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/alogin" element={<AdminLogin />} />
          <Route path="/slogin" element={<SellerLogin />} />
          <Route path="/clogin" element={<CustomerLogin />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/forgetPasswordAdmin" element={<ForgetPasswordAdmin />} />
          <Route path="/forgetPasswordSeller" element={<ForgetPasswordSeller />} />
          <Route path="/forgetPasswordCustomer" element={<ForgetPasswordCustomer />} />
          <Route path="/resetPassAdmin" element={<ResetPassAdmin />} />
          <Route path="/resetPassCustomer" element={<ResetPassCustomer />} />
          <Route path="/resetPassSeller" element={<ResetPassSeller />} />
          <Route path="/aprofile" element={<AdminProfile />} />
          <Route path="/sprofile" element={<SellerProfile />} />
          <Route path="/cprofile" element={<CustomerProfile />} />
          <Route path="/sellers" element={<AllSellers />} />
          <Route path="/customers" element={<AllCustomers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myproducts" element={<MyProducts />} />
          <Route path="/edit/:productId" element={<EditProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/cart" element={<ViewCart />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/viewfeedback" element={<ViewFeedback />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
     
      <Partner/>
      <Order/> 
      <Footer/>
    </div>
    </>
  );
}

export default App;

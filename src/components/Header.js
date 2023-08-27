import { useSelector } from "react-redux";
import slide1 from "../images/1.png"
function Header() {
    const state = useSelector((state) => state);
    console.log("Header ", state.loggedin.Username)
    return (
            <div className="row jumbotron p-2 mb-0 rounded-0 text-white" style={{ background: "#6C4AB6" }}>
                <div className="col ">
                    <img  src={slide1} alt={"icon"} style={{ width: "120px", height: "90px" }} className="float-left"/>
                </div>
                <div className="col">
                    <h4 className="text-center " style={{ marginTop: "25px" }} >Online ShopaHolic.com</h4>
                </div>
                <div className="col">
                    {state.loggedin.IsLoggedIn ?
                        <>
                            <label className="float-right">Welcome ! {state.loggedin.Username}</label> </> :
                        ''}
                </div>
            </div>  
    )
}

export default Header;

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ViewFeedback() {
    const [feedback, setFeedback] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:8080/api/customers/viewfeedback")
            .then(resp => {
                console.log(resp.data)
                setFeedback(resp.data)
            })
    }, []);

    const stars = (props) => {
        console.log(props);
        switch (props) {
            case 1:
                return <i className="fa fa-star"></i>
            case 2:
                return <div><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
            case 3:
                return <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
            case 4:
                return <div><i className="fa fa-star"></i><i className="fa fa-star"><i className="fa fa-star"></i></i><i className="fa fa-star"></i></div>
            case 5:
                return <div><i className="fa fa-star"></i><i className="fa fa-star"><i className="fa fa-star"></i></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
            default:
                return ""
        }
    }

    window.onbeforeunload = function () {
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function () {
        if (window.location.href === sessionStorage.getItem("origin")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    return (
        <div className="container mt-4">
            <div className="card shadow bg-light text-white">
                <div className="card-body">
                    <h4 className="text-dark text-center">Customer Feedback</h4>
                    <table className="table table-bordered table-dark table-striped table-hover">
                        <thead className="table-dark">
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map(x => (
                                <tr key={x.feedbackId} className="text-center">
                                    <td>{x.feedbackId}</td>
                                    <td>{x.name}</td>
                                    <td >{x.email}</td>
                                    <td>{stars(x.rating)}</td>
                                    <td>{x.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
export default ViewFeedback;
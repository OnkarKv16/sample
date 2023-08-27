import React from 'react';
import '../static/About.css';
import computer from "../images/computer.png";
import target from "../images/target.png";
import confued from "../images/confused.png";

function About() {
    return (
        <>
            <main role="main">
           
                <div className="container about_text">
                <hr />
                    <div className="row">
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={computer} alt={"Logo"} className="bd-placeholder-img  " width="140" height="140" />
                                <h2>Vision</h2>
                            </div>
                            <p className="justify">To be the leading online retailer for product or service by providing our customers with an exceptional shopping experience that is convenient, affordable, and reliable.
                            This vision statement is clear, concise, and aspirational... 
                            It tells your customers what you want to achieve and how you plan to do it. It is also specific enough to give you a roadmap for success, but general enough to allow for flexibility and growth.
                            </p>

                        </div>
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={target} alt={"Logo"} className="bd-placeholder-img " width="140" height="140" />
                                <h2>Mission</h2>
                            </div>
                            <p className="justify">To provide our customers with the best possible shopping experience by offering a wide selection of high-quality products, competitive prices, and excellent customer service.

                            This mission statement is clear, concise, and focused on the customer. It tells your customers what you are committed to providing them with, and it gives them a reason to shop with you. It is also specific enough to give you guidance in your day-to-day operations, but general enough to allow for flexibility and growth.
                            </p>

                        </div>
                        <div className="col-md-4  ">
                            <div className="text-center mt-2">
                                <img src={confued} alt={"Logo"} className="bd-placeholder-img" width="140" height="140" />
                                <h2>Why Us</h2>
                            </div>
                            <p className="d-flex justify-content-start">
                            1.Wide selection of products:- You offer a wide variety of products to choose from, so customers can find what they need. <br />

                            2.Competitive prices:- You offer competitive prices on your products, so customers can save money. <br />
                            3.Excellent customer service:- You provide excellent customer service, so customers can get help when they need it. <br />
                            4.Convenient shopping experience:- You make it easy for customers to shop with you, so they can get what they need quickly and easily.

                            </p>
                        </div>
                    </div>

                    <hr />

                </div>

            </main>
        </>
    );
}

export default About;
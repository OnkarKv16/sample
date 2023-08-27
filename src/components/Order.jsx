import React from 'react';
import Oder from "./Oder.css";
const Order = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/2203/2203145.png" alt="Image 1" />
        <h5>FREE SHIPPING ACROSS INDIA</h5>
        <p>we will deliver your order across india for free</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/6582/6582140.png" alt="Image 2" />
        <h5>SUPPORT 24/7</h5>
        <p>Our support team is always there for you</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/650/650917.png" alt="Image 3" />
        <h5>MONEY RETURN</h5>
        <p>Please refer to returns and exchange section for more details</p>
      </div>
    </div>
  );
};

export default Order;


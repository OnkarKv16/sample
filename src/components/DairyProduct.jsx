import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import './HorizontalCard.css'; // Make sure to adjust the import path for your CSS file

const DairyProduct = () => {
  const cardData = [
    {
      imageSrc: "https://www.bigbasket.com/media/uploads/p/l/40254078_1-visakha-dairy-premium-milk-bread-nutritious-healthy-breakfast.jpg",
      title: "Dairy,Bread & eggs"
    },
    {
      imageSrc: "https://www.towntokri.com/wp-content/uploads/2021/03/appy-160ml.jpg",
      title: "cold drinks & juices"
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61tuupIbRqL.jpg",
      title: "Snacks & munchies"
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61LojzJ+PuL._AC_UF1000,1000_QL80_.jpg",
      title: "Sweet Tooths"
    },
    {
      imageSrc: "https://www.spencers.in/media/catalog/category/4304_1.png",
      title: "bakary & biscuits"
    },
    {
      imageSrc: "https://gspice.mx/cdn/shop/collections/Tea_Coffee_1200x1200.png?v=1647911202",
      title: "Tea,Coffee & Drinks"
    },
    {
      imageSrc: "https://m.media-amazon.com/images/I/61nxyc529ZL.jpg",
      title: "Aata,Rice & Dal"
    },
    {
      imageSrc: "https://images.marico.in/800x0/uploads/07-1652967326-5380.jpg",
      title: "Masala Oil & More"
    },
    {
      imageSrc: "https://imgk.timesnownews.com/story/Fruit_and_begetables_longevity_heart_health_diet.jpg?tr=w-1200,h-900",
      title: "Friutes & vegetables"
    },
    {
      imageSrc: "https://bigoffers.co.in/wp-content/uploads/2021/10/Sauces-Ketchup-Spreads.jpg",
      title: "sauces & spreads"
    },
    {
      imageSrc: "https://cdn01.pharmeasy.in/dam/products_otc/O85744/pampers-premium-care-pants-small-size-baby-diapers-sm-softest-ever-pampers-pants-70-count-2-1659236445.jpg",
      title: "Baby Care Pampers"
    },
    
    // Add more card data entries as needed
  ];

  return (
    <Row className="image-card1" style={{backgroundColor:"white"}} >
      {cardData.map((card, index) => (
        <Col xs={10} md={1} key={index} className="image-container1" >
          <img src={card.imageSrc} alt={`Image ${index + 1}`} />
          <h5>{card.title}</h5>
        </Col>
      ))}
    </Row>
  );
};

export default DairyProduct;

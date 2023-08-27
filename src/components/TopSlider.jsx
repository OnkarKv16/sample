import Carousel from 'react-bootstrap/Carousel';
//import Footer from './Footer';
import slide2 from "../images/2.jpg"
import slide3 from "../images/3.jpg"
import slide4 from "../images/4.jpg"
import slide5 from "../images/5.jpg"
import slide6 from "../images/6.jpg"
import slide7 from "../images/7.jpg"
import slide8 from "../images/8.jpg"
import HorizonatalCard from './HorizonatalCard';
import {  ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import DairyProduct from './DairyProduct';
import DairyCorner from './DairyCorner';



function TopSlider() {
    const navigate=useNavigate()
  const state=useSelector((state)=>state);
    return (
        <>
<div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-20"
                        src="https://www.adarshdairy.com/img/carousel-2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 h-20"
                        src="https://www.anikdairy.com/images/products/all-products-banner.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                    <img
                        className="d-block w-100 h-20"
                        src="https://www.shivadairy.in/wp-content/themes/novelty/img/home-banner-1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item interval={6500}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide5}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7500}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide6}
                        alt="Second slide"
                    />
                </Carousel.Item> */}
                <Carousel.Item interval={8500}>
                    <img
                        className="d-block w-100 h-20"
                        src="https://img.freepik.com/free-vector/world-vegan-day-sale-banner-template_23-2149741503.jpg?w=2000&t=st=1692605424~exp=1692606024~hmac=3fee1bff9729f06298daafa471f080e516dc0c0302dd68dc858a3f9c96a921e4"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              <Button onClick={e=>navigate('/lcogin')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/register')}}>Signup</Button>
            </ButtonGroup>
             )}
            </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={9500}>
                    <img
                        className="d-block w-100 h-20"
                        src={slide8}
                        alt="Second slide"
                    />
                   
                </Carousel.Item> */}
            </Carousel>
            {/* <Footer /> */}
       
        </div>
    <HorizonatalCard/>
    <DairyCorner/>
    <DairyProduct/>
        </>
          
    );
}

export default TopSlider;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../ecom_banner.jpg';
import slide1 from "../carousel_temp.jpg";
import slide2 from "../carousel_oils.jpg";
import slide3 from "../carousel_badge.png";

const homescreen = () =>{
    return(
        <div>
        <Image src={banner} fluid />
        <Carousel style={{marginLeft: 20+'em' ,marginTop: 2 + 'em', width: 60 + 'em'}}>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


        </div>
    );
};

export default homescreen;

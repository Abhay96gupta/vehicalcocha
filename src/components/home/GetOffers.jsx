import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/cardslider.css'
import { useMediaQuery } from 'react-responsive';
import { Card, CardBody, CardFooter, CardGroup, CardHeader, CardText, CardTitle, Col } from 'react-bootstrap';

function GetOffers() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const carouselItems = [
        {
          image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',
          title: 'Mahindra XUV 3XO',
          price: 'Rs. 7.49 - 15.49 Lakh'
        },
        {
          image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
          title: 'Volkswagen Virtus',
          price: 'Rs. 11.56 - 19.41 Lakh'
        },
        {
          image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80',
          title: 'Maruti Fronx',
          price: 'Rs. 7.52 - 13.04 Lakh',
          oldPrice: '',
        },
        {
          image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80',
          title: 'Honda Elevate',
          price: 'Rs. 11.79 - 16.63 Lakh'
        },
        {
          image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/141857/kiger-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80',
          title: 'Honda City',
          price: 'Rs. 11.82 - 16.35 Lakh'
        },
      ];
      

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 5 : isTablet ? 3 : 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Speed of autoplay (3 seconds)
    pauseOnHover: true 
  };
  return (
    <div className="container ">
        <h1 className='text-center mt-5'>Get Offers on Popular Cars</h1>
        <div className="row">
            <Col sm={12} md={12} lg={12}>

                <Slider {...settings} className="carousel-showmanymoveone ">
                    {carouselItems.map((item, index) => (
                    <CardGroup className=''>
                        <div key={index} className="item ">
                            <Col sm={12} md={12}>
                            <a href="#" >
                                <img src={item.image} className="img-responsive center-block" alt={item.title} />
                            </a>
                            {item.discount && (
                                <span className="badge">{item.discount}</span>
                            )}
                        
                                <Card>
                                    <CardFooter>
                                            <p className="text-center mt-3">{item.title}</p>
                                            <h5 className="text-center">{item.price}</h5>
                                            {item.oldPrice && <h6 className="text-center old-price">{item.oldPrice}</h6>}
                                    </CardFooter>
                                </Card>
                            </Col>
                        </div>
                    </CardGroup>
                    ))}
                </Slider>
            </Col>
        </div>
    </div>
  )
}

export default GetOffers
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/cardslider.css'
import { Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function FeaturedSection1() {
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
          oldPrice: '5000,00 TK',
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
    slidesToShow: isDesktop ? 4 : isTablet ? 3 : 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Speed of autoplay (3 seconds)
    pauseOnHover: true 
  };
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
            <Slider {...settings} className="carousel-showmanymoveone">
                {carouselItems.map((item, index) => (
                <div key={index} className="item hover-item m-4 ">
                    <Col sm={12}>
                    <a href="#" >
                        <img src={item.image} className="img-responsive center-block" alt={item.title} />
                    </a>
                    {item.discount && (
                        <span className="badge">{item.discount}</span>
                    )}
                    <h4 className="text-center mt-3">{item.title}</h4>
                    <h5 className="text-center">{item.price}</h5>
                    {item.oldPrice && <h6 className="text-center old-price">{item.oldPrice}</h6>}
                    </Col>
                </div>
                ))}
            </Slider>
            </div>
        </div>
        </div>
    </>
  )
}

export default FeaturedSection1
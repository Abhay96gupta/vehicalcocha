import React from 'react'
import FeaturedSection1 from '../featuredcars/FeaturedSection1'
import { Col, Container, Row } from 'react-bootstrap'
import FeaturedSection2 from '../featuredcars/FeaturedSection2'
import FeaturedSection3 from '../featuredcars/FeaturedSection3'

function FeaturedCars() {
  return (
    <>
        <Container >
           <Row>
            <Col>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">TRENDING</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">POPULAR</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">UPCOMING</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <FeaturedSection1/>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <FeaturedSection2/>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <FeaturedSection3/>
                    </div>
                </div>
            </Col>
           </Row>
        </Container>
    </>
  )
}

export default FeaturedCars
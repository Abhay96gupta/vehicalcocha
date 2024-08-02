import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

function Section1() {
  return (
    <>
        <Container fluid> 
            <section>
                <Row className=''>
                    <div class="ourstory" >
                        <Col sm={12} md={12} lg={12} >
                                <img src="https://i.postimg.cc/8PLms7G5/car-img-2.png" alt="" width="500px" height="350px"/>
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <h1>OUR STORY</h1>
                                <p>Got lists 6861 car dealers in India spread across 985 cities. A complete listing of Dealerships available across 38 brands. Locate authorized car showrooms in your city in India by just clicking on your preferred car brand.</p>
                            <center><button className='center'>More</button></center>
                        </Col>
                    </div>
                </Row>
            </section>
        </Container>

    </>
  )
}

export default Section1
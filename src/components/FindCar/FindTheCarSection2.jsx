import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


function FindTheCarsSection2() {
  return (
    <>
        <Container>
            <Row >
                    <Col lg={12} className='mt-3'> 
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3} className='mt-3'> 
                    <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3} className='mt-3'> 
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                        <Button> Under 15 Lakh </Button>
                    </Col>
           </Row>
    </Container>
    </>
  )
}

export default FindTheCarsSection2
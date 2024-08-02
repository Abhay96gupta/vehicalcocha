import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap'
import FindTheCarsSection1 from '../FindCar/FindTheCarsSection1'
import FindTheCarsSection2 from '../FindCar/FindTheCarSection2'


function FindTheCars() {
  return (
    <>
       <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card p-3 shadow" >
        <h2 className="text-center p-3">Find The Cars Of Your Choice</h2>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <FindTheCarsSection1/>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <FindTheCarsSection2/>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <p>
              <strong>This is some placeholder content the Contact tab's associated content.</strong>
              Clicking another tab will toggle the visibility of this one for the next.
              The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
              tabs, pills, and any other <code>.nav</code>-powered navigation.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
    </>
  )
}

export default FindTheCars
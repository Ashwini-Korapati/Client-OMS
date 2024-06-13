import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import AddEmployeeform from '../HRHome/AddEmployeeform'
import '../HRHome/HRCards.css'

function HRCards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Container className="hr-container">
          <Row>
            <Col className="hr-gap-col">
              <Card className="hr-main">
                <Card.Body className="hr-details">
                  <Card.Title className="hr-headline">Attendance</Card.Title>
                  <Card.Text>25</Card.Text>
                  <Button className="hr-apply-button">View more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="hr-gap-col">
              <Card className="hr-main">
                <Card.Body className="hr-details">
                  <Card.Title className="hr-headline">Leave Report</Card.Title>
                  <Card.Text>30</Card.Text>
                  <Button className="hr-apply-button">View more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="hr-gap-col">
              <Card className="hr-main">
                <Card.Body className="hr-details">
                  <Card.Title className="hr-headline">Add Employee</Card.Title>
                  <Card.Text>50</Card.Text>
                  <Button className="hr-apply-button" onClick={handleShow}>Add Employee</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose} size="lg">
        
         
          <Modal.Body>
            <AddEmployeeform />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default HRCards;
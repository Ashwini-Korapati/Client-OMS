import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../career/Career.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

function Career() {
  return (
    <Container className="container">
      <Row className="gy-8">
        <Col md={3}>
          <Card className="main">
            <Card.Body className="details d-flex flex-column">
              <Card.Title className="headline">FULLSTACK Developer</Card.Title>
              <Card.Text>
                <FaLocationDot /> Bangalore
                <br />
                <MdWorkHistory /> 3 Years
              </Card.Text>
              <div className="mt-auto">
                <Button className="apply-button">
                  Apply
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="main">
            <Card.Body className="details d-flex flex-column">
              <Card.Title className="headline">Frontend Developer</Card.Title>
              <Card.Text>
                <FaLocationDot /> Bangalore
                <br />
                <MdWorkHistory /> 1 Years
              </Card.Text>
              <div className="mt-auto">
                <Button className="apply-button">
                  Apply
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="main">
            <Card.Body className="details d-flex flex-column">
              <Card.Title className="headline">Java Developer</Card.Title>
              <Card.Text>
                <FaLocationDot /> Bangalore
                <br />
                <MdWorkHistory /> 2 Years
              </Card.Text>
              <div className="mt-auto">
                <Button className="apply-button">
                  Apply
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="main">
            <Card.Body className="details d-flex flex-column">
              <Card.Title className="headline">Backend Developer</Card.Title>
              <Card.Text>
                <FaLocationDot /> Bangalore
                <br />
                <MdWorkHistory /> 1.5 Years
              </Card.Text>
              <div className="mt-auto">
                <Button className="apply-button">
                  Apply
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Career;
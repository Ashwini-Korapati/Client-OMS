
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../career/Career.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { fetchJobs } from '../../Redux/Actions'

function Career() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <Container className="career-container">
        <Row className="d-flex flex-wrap">
          {jobs.map((job, index) => (
            <Col md={3} className="gap-col" key={index}>
              <Card className="main">
                <Card.Body className="details d-flex flex-column">
                  <Card.Title className="headline">{job.title}</Card.Title>
                  <Card.Text>
                    <FaLocationDot /> {job.location}
                    <br />
                    <MdWorkHistory /> {job.experience}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button className="apply-button">
                      Apply
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Career;

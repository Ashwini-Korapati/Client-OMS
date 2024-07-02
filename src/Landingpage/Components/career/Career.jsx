// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import Card from "react-bootstrap/Card";
// // import Button from "react-bootstrap/Button";
// // import Container from "react-bootstrap/Container";
// // import Row from "react-bootstrap/Row";
// // import Col from "react-bootstrap/Col";
// // import '../career/Career.css';
// // import { FaLocationDot } from "react-icons/fa6";
// // import { MdWorkHistory } from "react-icons/md";
// // import { fetchJobs } from '../../Redux/Actions';

// // function Career() {
// //   const dispatch = useDispatch();
// //   const jobs = useSelector((state) => state.jobs);

// //   useEffect(() => {
// //     dispatch(fetchJobs());
// //   }, [dispatch]);

// //   return (
// //     <div>
// //       <Container className="career-container-custom">
// //         <Row className="c-d-flex-custom c-flex-wrap-custom">
// //           {jobs.map((job, index) => (
// //             <Col md={3} className="gap-col-custom" key={index}>
// //               <Card className="career-main-custom">
// //                 <Card.Body className="c-details-custom c-d-flex-custom c-flex-column-custom">
// //                   <Card.Title className="headline">{job.title}</Card.Title>
// //                   <Card.Text>
// //                     <FaLocationDot /> {job.location}
// //                     <br />
// //                     <MdWorkHistory /> {job.experience}
// //                   </Card.Text>
// //                   <div className="career-mt-auto-custom">
// //                     <Button className="career-apply-button-custom">
// //                       Apply
// //                     </Button>
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Career;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import '../career/Career.css';
// import { FaLocationDot } from "react-icons/fa6";
// import { MdWorkHistory } from "react-icons/md";
// import { fetchJobs } from '../../Redux/reducers/jobReducer'

// function Career() {
//   const dispatch = useDispatch();
//   const jobs = useSelector((state) => state.jobs);

//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   return (
//     <div>
//       <Container className="career-container-custom">
//         <Row className="justify-content-center">
//           {jobs.map((job, index) => (
//             <Col lg={3}  className="gap-col-custom" key={index}>
//               <Card className="career-main-custom">
//                 <Card.Body className="c-details-custom">
//                   <Card.Title className="headline">{job.title}</Card.Title>
//                   <Card.Text>
//                     <FaLocationDot /> {job.location}
//                     <br />
//                     <MdWorkHistory /> {job.experience}
//                   </Card.Text>
//                   <div className="career-mt-auto-custom">
//                     <Button className="career-apply-button-custom">
//                       Apply
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Career;



import React from 'react'

const Career = () => {
  return (
    <div>Career</div>
  )
}

export default Career
import React from "react";
import Card from "react-bootstrap/Card";
import blogImage from "../../images/blogimg1.jpg";
import blogImage2 from "../../images/blogimg2.jpg";
import blogImage4 from "../../images/blogimg4.jpg";
import blogImage5 from "../../images/blogimg5.jpg";
import blogImage6 from "../../images/blogimg6.jpg";
import blogImage7 from "../../images/blogimg7.jpg";
import "../Blogs/Blogs.css";

function Blogs() {
  return (
    <div className="main1">
      <div className="scrolling-wrapper">
        {/* Original set of cards */}
        <Card className="maincontainer">
          <Card.Img src={blogImage} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Generative AI</Card.Title>
            <Card.Text>
              Generative AI has become a revolutionary tool in the realm of
              website creation by offering solutions that streamline design
              processes and increase scalability.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage7} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Biometric security</Card.Title>
            <Card.Text>
              Biometric security is a modern identification and authentication
              method that uses unique physical traits, such as fingerprints,
              facial recognition, iris, or retina scans, to verify a person's
              identity.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage6} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Cloud Security</Card.Title>
            <Card.Text>
              Cloud security mainly focuses on how to implement policies,
              processes, and technologies together so they ensure data
              protection, support regulatory compliance, and provide control
              over privacy, access, and authentication for users and devices.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage4} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Web Designing</Card.Title>
            <Card.Text>
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage5} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Cloud computing</Card.Title>
            <Card.Text>
              Cloud computing is the delivery of computing services—including
              servers, storage, databases, networking, software, analytics, and
              intelligence—over the Internet (“the cloud”) to offer faster
              innovation, flexible resources, and economies of scale.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        {/* Duplicated set of cards */}
        <Card className="maincontainer">
          <Card.Img src={blogImage} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Generative AI</Card.Title>
            <Card.Text>
              Generative AI has become a revolutionary tool in the realm of
              website creation by offering solutions that streamline design
              processes and increase scalability.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage7} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Biometric security</Card.Title>
            <Card.Text>
              Biometric security is a modern identification and authentication
              method that uses unique physical traits, such as fingerprints,
              facial recognition, iris, or retina scans, to verify a person's
              identity.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage6} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Cloud Security</Card.Title>
            <Card.Text>
              Cloud security mainly focuses on how to implement policies,
              processes, and technologies together so they ensure data
              protection, support regulatory compliance, and provide control
              over privacy, access, and authentication for users and devices.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage4} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Web Designing</Card.Title>
            <Card.Text>
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img src={blogImage5} alt="Card image" className="card-img-custom" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Cloud computing</Card.Title>
            <Card.Text>
              Cloud computing is the delivery of computing services—including
              servers, storage, databases, networking, software, analytics, and
              intelligence—over the Internet (“the cloud”) to offer faster
              innovation, flexible resources, and economies of scale.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default Blogs;
import React from "react";
import Card from "react-bootstrap/Card";
import blogImage from "../../images/blogimg1.jpg";
import blogImage2 from "../../images/blogimg2.jpg";
import blogImage4 from "../../images/blogimg4.jpg";
import blogImage5 from "../../images/blogimg5.jpg";
import blogImage6 from "../../images/blogimg6.jpg";
import blogImage7 from "../../images/blogimg7.jpg";
import blogImage8 from "../../images/blogimg8.jpg";
import "../Blogs/Blogs.css";

function Services() {
  return (
    <div className="main1">
      <div className="headlines">
        <h1>Services we provide</h1>
      </div>
      <div className="scrolling-wrapper">
        <Card className="maincontainer">
          <Card.Img
            src={blogImage}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Innovative Technologies</Card.Title>
            <Card.Text>
              TOur IT company pioneers innovative technologies, driving
              transformative solutions and staying ahead in the dynamic
              landscape of digital advancements.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage7}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>User-friendly Interfaces</Card.Title>
            <Card.Text>
              Crafting user-friendly interfaces for global clients, our
              expertise combines design and functionality, ensuring seamless and
              satisfying user experiences worldwide.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage6}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Global Reach</Card.Title>
            <Card.Text>
              With a global presence, we serve clients worldwide, delivering
              tailored solutions and fostering lasting partnerships across
              diverse industries and regions.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage4}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Digital Transformation Expertise:</Card.Title>
            <Card.Text>
              Leverage our IT company's digital transformation expertise for a
              seamless transition, enhancing efficiency, innovation, and
              competitiveness in your organization.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage5}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Comprehensive Cloud Solutions</Card.Title>
            <Card.Text>
              Our IT company delivers end-to-end cloud solutions, ensuring
              seamless integration, robust security, and optimized performance
              for businesses' digital transformation.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage8}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>24/7 Support and Maintenance</Card.Title>
            <Card.Text>
              Our dedicated team delivers 24/7 support & maintenance, ensuring
              uninterrupted services and swift issue resolution for enhanced
              client satisfaction.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Innovative Technologies</Card.Title>
            <Card.Text>
              TOur IT company pioneers innovative technologies, driving
              transformative solutions and staying ahead in the dynamic
              landscape of digital advancements.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage7}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>User-friendly Interfaces</Card.Title>
            <Card.Text>
              Crafting user-friendly interfaces for global clients, our
              expertise combines design and functionality, ensuring seamless and
              satisfying user experiences worldwide.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage6}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Global Reach</Card.Title>
            <Card.Text>
              With a global presence, we serve clients worldwide, delivering
              tailored solutions and fostering lasting partnerships across
              diverse industries and regions.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage4}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Digital Transformation Expertise:</Card.Title>
            <Card.Text>
              Leverage our IT company's digital transformation expertise for a
              seamless transition, enhancing efficiency, innovation, and
              competitiveness in your organization.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage5}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>Comprehensive Cloud Solutions</Card.Title>
            <Card.Text>
              Our IT company delivers end-to-end cloud solutions, ensuring
              seamless integration, robust security, and optimized performance
              for businesses' digital transformation.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="maincontainer">
          <Card.Img
            src={blogImage8}
            alt="Card image"
            className="card-img-custom"
          />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title>24/7 Support and Maintenance</Card.Title>
            <Card.Text>
              Our dedicated team delivers 24/7 support & maintenance, ensuring
              uninterrupted services and swift issue resolution for enhanced
              client satisfaction.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default Services;
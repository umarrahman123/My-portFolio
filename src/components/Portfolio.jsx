import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../App.css";

const Portfolio = () => {
  return (
    <div className="app light-theme">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">My Portfolio</a>
          <div className="d-flex">
            <a href="#about" className="btn btn-outline-primary me-2">About Me</a>
            <a href="#skills" className="btn btn-outline-primary me-2">Skills</a>
            <a href="#projects" className="btn btn-outline-primary me-2">Projects</a>
            <a href="#contact" className="btn btn-primary me-2">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Container className="hero text-center py-5">
      <img src="/umar.png" alt="Profile" className="rounded-circle shadow" width="150" />
        <h1 className="mt-3">Hi, I'm Umar Rahman</h1>
        <h5 className="mt-3">A Web Developer specializing in | HTML | CSS | JavaScript | React | Bootstrap</h5>
        <h5 className="mt-3">| Node.js | MongoDB | GitHub</h5>
      </Container>

      {/* About Me Section */}
      <Container id="about" className="hero text-center py-5">
        <h2 className="mt-3">About Me</h2>
        <p>
          I'm a passionate web developer with expertise in modern web technologies. I enjoy
          building user-friendly and scalable web applications.
        </p>
        <h3 className="mt-3">Education</h3>
        <p>Intermediate from Sindh Karachi Board</p>
        <h3 className="mt-3">Experience</h3>
        <p>Student at Saylani Mass IT Training (SMIT)</p>
      </Container>

      {/* Skills Section */}
      <Container id="skills" className="text-center py-5">
        <h2>Skills</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="mt-3">
              <strong>Frontend:</strong> React, Next.js, Bootstrap, Tailwind CSS
            </p>
            <p>
              <strong>Backend:</strong> Node.js, Express.js
            </p>
            <p>
              <strong>Database:</strong> MongoDB, Firebase
            </p>
            <p>
              <strong>Tools:</strong> Git, GitHub, Postman
            </p>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container id="projects" className="py-5">
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>A cool project of Microfinance App.</Card.Text>
                <Button variant="primary" href="https://heackatoon-frontend-2025.vercel.app/" target="_blank">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text> Signup login page and create multiple post Edit/Delete Post and logout .</Card.Text>
                <Button variant="primary" href="https://signup-login-home-post.netlify.app/login.html" target="_blank">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>Yet another cool project Quiz Application.</Card.Text>
                <Button variant="primary" href="https://umar-quiz-application.netlify.app/" target="_blank">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Four</Card.Title>
                <Card.Text>Another awesome project Forkify Recipe Menu.</Card.Text>
                <Button variant="primary" href="https://recipe-menu-perkipaye.netlify.app/" target="_blank">View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="text-center py-5">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or social media!</p>
        <p>Email: umaryousufzai9@gmail.com</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://github.com/umarrahman123" target="_blank" className="text-dark fs-3">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/umar-rahman-yousufzai-a1aa08255/recent-activity/all/" target="_blank" className="text-dark fs-3">
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

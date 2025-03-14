import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/Umar.png";

import "../App.css";

const Portfolio = () => {
  return (
    <div className="app light-theme">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">My Portfolio</a>
          <div className="d-flex">
            <a href="#projects" className="btn btn-outline-primary me-2">Projects</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Container className="hero text-center py-5">
        <img src={profileImg} alt="Profile" className="rounded-circle shadow" width="150" />
        <h1 className="mt-3">Hi, I'm Umar Rahman</h1>
        <h5 className="mt-3">A Web Developer specializing in | HTML| CSS| Javascript | React | Bootstrap</h5>
        <h5 className="mt-3">| Node JS | MongoDB | Github</h5>
      </Container>
      {/* Hero Section */}
      <Container className="hero text-center py-2">
        
        <h1 className="mt-3">Education</h1>
        <h5 className="mt-3">Intermidaite from sindh karachi board</h5>
        <h2 className="mt-3">Experiance</h2>
        <h5 className="mt-3">A Student of (SMIT) Saylani Mass IT Training</h5>
      </Container>

      {/* Projects Section */}
      <Container id="projects" className="py-5">
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>A cool project description.</Card.Text>
                <Button variant="primary" href="#">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>Another amazing project.</Card.Text>
                <Button variant="primary" href="#">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>Yet another cool project.</Card.Text>
                <Button variant="primary" href="#">View</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>Yet another cool project.</Card.Text>
                <Button variant="primary" href="#">View</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="text-center py-5">
        <h2>Contact Me</h2>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://github.com/yourgithub" target="_blank" className="text-dark fs-3">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-dark fs-3">
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;


// rafce
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>
      <header>
        <div className="container py-3">
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className="logo">
              <span>UrbanEdge</span> Constructions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="#services" className="nav-link">
                  Services
                </Nav.Link>
                <Nav.Link href="#project" className="nav-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#blogs" className="nav-link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="#contact-us" className="nav-link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Contructions</span>
                <h1>
                  Crafting dream with <br /> precision and excellence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and persice
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary">Contact Now</a>
                  <a className="btn btn-secondary ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

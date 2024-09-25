import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light py-5">
      <div className="container">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
      </div>
    </div>
  );
};

const Card = ({ title, text, imgSrc }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container py-5">
        <div className="row">
          <Card title="Card title 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card title 2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card title 3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco." imgSrc="https://via.placeholder.com/500x325" />
        </div>
      </div>
    </>
  );
};

export default Home;


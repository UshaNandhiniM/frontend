import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container border border-t-slate-800 border-black">
          <div className="font-bold dark:text-white text-4xl flex flex-wrap">
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 via-green-200 to-sky-800 rounded-lg text-white">
              Car Care
            </span>
          </div>
          <div className=" flex-center" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">About Us</h1>
        <h1 className="text-2xl">
          Car care aspires to be a one-stop solution for all car care needs
        </h1>
        <br />
        <p className="mb-4 text-slate-700">
          Car care stands at the forefront of the automotive service industry,
          blending reliability with cost-effectiveness for unparalleled car
          care. Led by founder usha, our mission is to redefine the automotive
          service industry through innovation, reliability, and
          customer-centricity.
        </p>
        <p className="mb-4 text-slate-700">
          We have expanded our presence across 50+ cities in India, offering
          comprehensive car servicing solutions tailored to meet the diverse
          needs of our customers. Our dedicated team of over 100 skilled
          technicians undergo meticulous training to ensure expertise in the
          latest automotive technologies.
        </p>
        <p className="mb-4 text-slate-700">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>
    </div>
  );
};

export default About;

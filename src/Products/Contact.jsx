import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
        <h1 className="text-2xl">
          Car care aspires to be a one-stop solution for all car care needs
        </h1>
        <br />
        <div className="flex ">
        <div>Email: Info@carCare.in</div>
        <div>Phone: +91-9876543210</div>
        <div>Address: 123 Main St, Anytown, USA</div>
        <div>Working Days : Monday-Sunday</div>
        <div>Working Hours :7:00AM - 9:00PM (IST)</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

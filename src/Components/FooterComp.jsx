import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FooterComp = () => {
    return (
        <div>
           <Footer container className='border border-t-slate-800 border-black' >
      <div className="w-full">
        <div className="grid  sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://cdn5.vectorstock.com/i/1000x1000/68/79/auto-service-sign-car-repair-logo-eps-vector-22266879.jpg"
              alt="Flowbite Logo"
              name="Car Care"
            />
          </div>
          <div className="grid  gap-6 sm:grid-cols-4 ">
            <div>
              <Footer.Title title="OUR SERVICES" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Scheduled Services</Footer.Link>
                <Footer.Link href="#">Ac Services</Footer.Link>
                <Footer.Link href="#">Cleaning & Detailing</Footer.Link>
                <Footer.Link href="#">Batteries</Footer.Link>
                <Footer.Link href="#">Tyres</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LUXURY BRANDS" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Mercedes</Footer.Link>
                <Footer.Link href="#">BMW</Footer.Link>
                <Footer.Link href="#">Audi</Footer.Link>
                <Footer.Link href="#">Volvo</Footer.Link>
                <Footer.Link href="#">Ferrari</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="POPULAR BRANDS" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Maruti Suzuki</Footer.Link>
                <Footer.Link href="#">Hyundai</Footer.Link>
                <Footer.Link href="#">Honda</Footer.Link>
                <Footer.Link href="#">Tata</Footer.Link>
                <Footer.Link href="#">Mahindra</Footer.Link>

              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between font-black">
          <Footer.Copyright href="#" by="UshaNandhini™" year={new Date().getFullYear()} />
          <div className="mt-10 text-center text-gray-500">
        <p>�� 2024 Car Care. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
        <Link to="/contact">Contact Us</Link>
      </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer> 
        </div>
    );
};

export default FooterComp;
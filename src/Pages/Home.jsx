import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from './Carousel';
import FooterComp from '../Components/FooterComp';


const Home = () => {
    return (
        <div>
         <Navbar/>
         <Carousel/>
        <FooterComp/>

        </div>
    );
};

export default Home;
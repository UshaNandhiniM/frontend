import React from 'react';
import ProductNav from './ProductNav';
import FooterComp from '../Components/FooterComp';
import OrderPage from './OrderForm';

const Order = () => {
    return (
        <div>
          <ProductNav/>
          <OrderPage/>
          <FooterComp/>
        </div>
    );
};

export default Order;
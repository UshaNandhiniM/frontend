import React, { useState } from "react";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Admin/Users";
import UpdateProduct from "./Admin/UpdateProduct";
import About from "./Pages/About";
import Faqs from "./Pages/Faqs";
import Service from "./Pages/Service";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import CreateProd from "./Admin/CreateProd";
import AdminPage from "./Admin/AdminPage";
import Order from "./Products/Order";
import AdminOrder from "./Admin/AdminOrder";
import PaymentPage from "./Products/PaymentPage";
import UpdateOrder from "./Admin/UpdateOrder";
import Contact from "./Products/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/create" element={<CreateProd />} />
          <Route path="/edit/:id" element={<UpdateProduct />} />
          <Route path="/products" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/adminorder" element={<AdminOrder />} />
          <Route path="/cart" element={<Order/>} />
          <Route path="/payment" element={<PaymentPage/>}/>
          <Route path="/editorder/:id" element={<UpdateOrder/>}/>
          <Routh path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

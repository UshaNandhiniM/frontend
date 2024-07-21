import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../Redux/CartSlice";

import { Card } from "flowbite-react";
import { createOrder } from "../Redux/OrderSlice";
import {  useNavigate } from "react-router-dom";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () => {
    return products.reduce((acc, curr) => acc + curr.price, 0);
  };
  const products = useSelector((state) => state.cart);

  if (products.length === 0) return <h2>Cart is empty</h2>;

  const { currentUser } = useSelector((state) => state.auth);


  const [formData, setFormData] = useState({
    name: currentUser.rest.username,
    email: currentUser.rest.email,
    address: "",
    pickupDate: "",
    phonenumber: "",
    productName: products[0].name,
    price: products[0].price,
    totalPrice: getTotal(),
    carFuelType: "",
    carNumber: "",
    carBrand: "",
    noteDown: "",
    paymentMethod: "",
    status: "booked",
    bookingDate: new Date(),
    paymentStatus: "pending",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://car-service-backend-5142.onrender.com/api/order/create-order",
        formData
      );
      dispatch(createOrder(response.data.result));
      console.log(response.data);
      alert("order Confirmed");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemove = (productId) => {
    dispatch(deleteCart(productId));
  };

  return (
    <div>
      <div className="order-form">
        <div className="container-md">
          <br />
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information of your Cart and your Personal Infromation
                </p>
                <div>
                  <br />
                  {products.map((ele) => (
                    <div className="col" key={ele._id}>
                      <Card
                        className="max-w-sm col-span-6 shadow-lg"
                        imgSrc={ele.images}
                        horizontal
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {ele.name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {ele.description}
                        </p>
                        <p className="text-gray-500 dark:text-gray-300">
                          Price: ${ele.price}
                        </p>
                      </Card>
                      <br />
                      <button
                        className="btn btn-primary px-3 py-2 "
                        onClick={() => handleRemove(ele.id)}
                      >
                        Remove
                      </button>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="productName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Service Name
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                              <input
                                id="productName"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                type="text"
                                readOnly
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Personal Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="username"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Name
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                {currentUser.rest.username}
                              </span>
                              <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                readOnly
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email Address
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                {currentUser.rest.email}
                              </span>
                              <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                readOnly
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="phonenumber"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Phone Number
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                id="phonenumber"
                                name="phonenumber"
                                type="number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="carNumber"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Car Number
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <input
                                id="carNumber"
                                name="carNumber"
                                type="text"
                                value={formData.carNumber}
                                onChange={handleChange}
                                required
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="carFuelType"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Car Type
                            </label>
                            <div className="mt-2">
                              <select
                                id="carFuelType"
                                name="carFuelType"
                                autoComplete="cartype"
                                value={formData.cartype}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>Select the FullType</option>
                                <option>Pertrol</option>
                                <option>Diesel</option>
                                <option>CNG</option>
                              </select>
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="carBrand"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Car Model
                            </label>
                            <div className="mt-2">
                              <select
                                id="carBrand"
                                name="carBrand"
                                autoComplete="carBrand"
                                value={formData.carBrand}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>Select the Car Brand</option>
                                <option>Corolla</option>
                                <option>Camry</option>
                                <option>Fusion</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-span-full">
                            <Label
                              htmlFor="address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Street address
                            </Label>
                            <div className="mt-2">
                              <input
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="pickupDate"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              PickUp Date:
                            </label>
                            <div className="mt-2">
                              <input
                                id="pickupDate"
                                name="pickupDate"
                                type="text"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Notifications
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We'll always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>
                  <label htmlFor="noteDown">
                    {" "}
                    Note need to Know about the car before Services pls notedown
                    here
                  </label>
                  <TextInput
                    type="text"
                    id="noteDown"
                    value={formData.notepad}
                    onChange={handleChange}
                    name="noteDown"
                    required
                  ></TextInput>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="totalPrice"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      id="totalPrice"
                      name="totalPrice"
                      type="number"
                      value={formData.totalPrice}
                      onChange={handleChange}
                      readOnly
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Proceed to Pay
              </button>
              <br/>
            </div>
            <br/>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default OrderPage;

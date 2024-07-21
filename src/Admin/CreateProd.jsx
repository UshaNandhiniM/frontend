import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createUser } from "../Redux/userSlice";

const CreateProd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [ratings, setRatings] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://car-service-backend-5142.onrender.com/api/product/create-product",
        { name, price, description, ratings }
      );
      dispatch(createUser(res.data.result));
      toast.success(res.data.message);
      navigate("/user");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex vh-100  justify-content-center align-items-center">
      <div className="w-90 h-90 bg-primary rounded p-3">
        <h1 className="text-black text-bold">Create Product</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="from-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="from-label">
              Price:
            </label>
            <input
              type="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="from-label">
              Description:
            </label>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="ratings" className="from-label">
              Ratings:
            </label>
            <input
              type="number"
              id="ratings"
              onChange={(e) => setRatings(e.target.value)}
              required
            />
            <small>Must be between 1 and 5</small>
          </div>
          <br />
          <div>
            <label htmlFor="images" className="from-label">
              Images
            </label>
            <input
              type="text"
              id="images"
              accept=".jpg,.png,.jpeg"
              required
              multiple
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-danger">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProd;

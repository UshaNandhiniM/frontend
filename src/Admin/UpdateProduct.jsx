import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUser } from "../Redux/userSlice";

const UpdateProduct = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const products = useSelector((state) => state.product.products);

  const product = products.find((ele) => ele.id === id);
  console.log(product);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [ratings, setRatings] = useState(product.ratings);
  const [images, setImages] = useState(product.images);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://car-service-backend-5142.onrender.com/api/product/update-product/${id}`,
        {
          name,
          price,
          description,
          ratings,
          images,
        }
      );

      dispatch(updateUser(response.data.result));
      toast.success(response.data.message);
      navigate("/user");
    } catch (err) {
        console.log(err);
    }
  };

  return (     
    <div className="flex vh-100  justify-content-center align-items-center">
      <div className="w-90 h-90 bg-primary rounded p-3">
        <h1 className="text-black text-bold">Update Product</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="from-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="from-label">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="from-label">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
            />
          </div>
          <div>
            <label htmlFor="ratings" className="from-label">
              Ratings:
            </label>
            <input
              type="number"
              id="ratings"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
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
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-danger">Update</button>
        </form>
      </div>
    </div> 

);
};

export default UpdateProduct;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateOrder } from "../Redux/OrderSlice";
import axios from "axios";

const UpdateOrder = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();
  const orders = useSelector((state) => state.order.orders);

  const order = orders.find((ele) => ele.id === id);
  console.log(order);

  const [status, setStatus] = useState(order.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://car-service-backend-5142.onrender.com/api/order/update-order/${id}`,
        {
          status,
        }
      );
      dispatch(updateOrder(response.data.result));
      navigate("/adminorder");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Order Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Booked">Booked</option>
            <option value="completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>
        <button type="button" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateOrder;

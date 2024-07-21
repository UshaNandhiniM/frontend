import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateOrder } from "../Redux/OrderSlice";

const PaymentPage = () => {
  const order = useSelector((state) => state.order.orders[0]);
  
  if (!order) return <h1>Loading...</h1>;
  const navigate = useNavigate();
  const {id} =useParams();
  const dispatch=useDispatch()

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
     const res= await axios.put(`https://car-service-backend-5142.onrender.com/api/order/update-order/${id}`, {
        paymentStatus: "paid",
      });
      navigate("/success");
      dispatch(updateOrder(res.data.result))
      console.log("Payment Successful");
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  return (
    <div>
      <h1>Paymentpage</h1>
      <p>Service:{order.name}</p>
      <p>Total Price:{order.totalPrice}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;

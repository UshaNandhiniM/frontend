import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder } from "../Redux/OrderSlice";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import ProductNav from "../Products/ProductNav";

const AdminOrder = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order.orders);

  console.log(order);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://car-service-backend-5142.onrender.com/api/order/getorder"
      );
      dispatch(getOrder(response.data.bookings));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://car-service-backend-5142.onrender.com/api/order/delete-order/${id}`
      );
      dispatch(deleteOrder({ id }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ProductNav />
      <div className="d-flex  justify-content-center">
        <div className="w-70 bg-slate-300 rounded p-3">
          <h1 className="text-center">Orders</h1>
          <br />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service Name</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Car Fuel Type</th>
                <th scope="col">Car Brand</th>
                <th scope="col">Car Number</th>
                <th scope="col">NoteDown</th>
                <th scope="col">Total Price</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Status</th>
                <th span={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {order.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.productName}</td>
                  <td>{ele.address}</td>
                  <td>{ele.pickupDate} </td>
                  <td>{ele.phonenumber}</td>
                  <td>{ele.carFuelType}</td>
                  <td>{ele.carBrand}</td>
                  <td>{ele.carNumber}</td>
                  <td>{ele.noteDown}</td>
                  <td>{ele.totalPrice}</td>
                  <td>{ele.paymentStatus}</td>
                  <td>{ele.status}</td>

                  <td>
                    <Link
                      to={`/editorder/${ele.id}`}
                      className="btn btn-sm btn-warning me-3"
                    >
                      Edit
                    </Link>

                    <Button
                      onClick={() => handleDelete(ele.id)}
                      className="btn btn-info me-3"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;

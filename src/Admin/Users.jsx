import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../Redux/userSlice";
import Navbar from "../Components/Navbar";

const Users = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.products);
  
  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://car-service-backend-5142.onrender.com/api/product/get-product"
      );
      dispatch(getUser(res.data.result));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://car-service-backend-5142.onrender.com/api/product/delete-product/${id}`
      );
      dispatch(deleteUser({ id }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar/>
      <div className="d-flex  justify-content-center">
        <div className="w-70 bg-slate-300 rounded p-3">
          <Link to="/create" className="btn btn-info btn-sm">
            Add Product
          </Link>
          <br />
          <br />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Ratings</th>
                <th scope="col">Images</th>
                <th span={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.description}</td>
                  <td>{ele.price}</td>
                  <td>{ele.ratings}</td>
                  <td>
                    <img src={ele.images} alt="images" width="50" />
                  </td>
                  <td>
                    <Link
                      to={`/edit/${ele.id}`}
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

export default Users;

import React, { useEffect } from "react";
import FooterComp from "../Components/FooterComp";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/userSlice";
import { Button, Card } from "flowbite-react";
import axios from "axios";
import { addCart } from "../Redux/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import ProductNav from "../Products/ProductNav";
import { useNavigate } from "react-router";

const Service = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.product.products);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://car-service-backend-5142.onrender.com/api/product/get-product"
      );
      getUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (ele) => {
    dispatch(addCart(ele));
    navigate("/cart");  
    alert("Book your Order");
  };
  return (
    <div>
      <ProductNav />
      <br />

      <div className="container-md border-x border-y border-spacing-5">
        <div className="row row-col-4 g-5 ">
          <div className="" >
            <br/>
          {product.map((ele,index) => (
            <div  key={index} >
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
              <Button
                className="btn btn-primary"
                onClick={() => handleAdd(ele)}
              >
                Add to cart
              </Button>
            </Card>
            </div>
          ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <FooterComp />
    </div>
  );
};

export default Service;

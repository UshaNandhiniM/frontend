import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import FooterComp from "../Components/FooterComp";
import OAuth from "../Components/OAuth";
import { signInStart, signInFailure, signInSuccess } from "../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const [formData, setFormData] = useState({});
  const {loading, error}=useSelector((state)=>state.auth);
  const [errorMessage,setErrorMessage]=useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("please fill out the fields");
    }
    try {
      dispatch(signInStart())
      const response = await fetch(
        "https://car-service-backend-5142.onrender.com/api/user/login-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      if (response.ok) {
        localStorage.setItem('Token',data.token)
        dispatch(signInSuccess(data));
        toast.success("Registration Successful! You can now login.");
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      
    }
  };

  return (
    <div>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <div className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-green-400 via-green-200 to-sky-800 rounded-lg text-white">
                Car Care
              </span>
            </div>
            <p className="text-sm mt-6">
              You can sign in with your Email and password or you can use the
              Google.
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone="" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      color="purple"
                      aria-label="Purple spinner example"
                      size="sm"
                    />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-6">
              <span>Create a account</span>
              <Link to="/register" className="text-blue-500">
                Sign up
              </Link>
            </div>
            {errorMessage && (
              <Alert
                color="failure"
                icon={HiInformationCircle}
                className="mt-5"
              >
                <span className="font-medium me-2">🥴OOPS!</span>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Login;

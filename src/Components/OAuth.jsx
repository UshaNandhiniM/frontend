import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { app } from "../firebase";
import { signInFailure, signInSuccess } from "../Redux/AuthSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesubmit = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch(
        "https://car-service-backend-5142.onrender.com/api/user/google",
        {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            profilePic: result.user.photoURL,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) localStorage.setItem("Token", data.token);
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <Button type="button">
      <AiFillGoogleSquare className="w-6 h-6 mr-2" onClick={handlesubmit} />
      Continue with Google
    </Button>
  );
};

export default OAuth;

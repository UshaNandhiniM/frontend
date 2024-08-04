import { Avatar, Button, Dropdown, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProductNav = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()

  const handleSignout =()=>{
    localStorage.removeItem('token');
    dispatch(signInSuccess(null));
    navigate('/login');
  }
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container border border-t-slate-800 border-black">
            <div className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-green-400 via-green-200 to-sky-800 rounded-lg text-white">
                Car Care
              </span>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <form>
              <TextInput
                type="text"
                placeholder="Search Blogs...."
                rightIcon={AiOutlineSearch}
                className="hidden lg:inline"
              />
            </form>
            <Button
              className="w-12 h-10 lg:hidden text-dark"
              gradientDuoTone="purpleToPink"
              outline
              pill
            >
              <AiOutlineSearch />
            </Button>
            <div className=" flex-center" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-3 mb-lg-6">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className= "nav-item">
                  <Link to="/products" className="nav-link">
                    services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faqs" className="nav-link">
                    FAQ's
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                   <span className="badge rounded-full  bg-danger"><MdAddShoppingCart/></span>
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      contact
                    </Link>
                  </li>
                {currentUser ? (
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar alt="user" img={currentUser.rest.profilePicture} rounded />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {currentUser.rest.username}
                      </span>
                    </Dropdown.Header>
                   <Link to="/dashboard?tab=profile">
                   <Dropdown.Item>Profile</Dropdown.Item>
                   </Link>

                   <Dropdown.Item onClick={handleSignout}>
                     Logout
                   </Dropdown.Item>
                  </Dropdown>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      login
                    </Link>
                  </li>
                )}
                 

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProductNav;

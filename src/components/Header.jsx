import React, { useContext, useState } from "react";
import Logo from "./images/logo.png";
import Avatar from "./images/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { MdShoppingBasket, MdLogout, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheContext } from "../context/Provider";
import { actionType } from "../context/Reducer";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useTheContext();

  const [isMenu, setIsMenu] = useState(false);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  // Google Auth API
  // google auth with popup from firebase documentation
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    // update state provider
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const avatarSrc = user ? user.photoURL : Avatar;

  return (
    <header className="fixed bg-primary w-screen z-50 p-3 px-4 md:p-6 md:px-16">
      {/* large size and medium sizes */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-heading-color text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-[33px] list-none"
          >
            <li
              className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out"
            >
              Home
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out"
            >
              Menu
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out"
            >
              About us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out"
            >
              Service
            </li>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold ">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={`${avatarSrc}`}
              className="rounded-full w-10 min-w-[40px] cursor-pointer min-10-[40px] drop-shadow-xl"
              alt="avatar"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute  top-12
                 right-0"
              >
                {user && user.email === "hamadaahmed927@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                        text-base "
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                    text-base"
                  onClick={logout}
                >
                  logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* small sizes */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold ">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-heading-color text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatarSrc}
            className="rounded-full w-10 min-w-[40px] cursor-pointer min-10-[40px] drop-shadow-xl"
            alt="avatar"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute  top-12
                 right-0"
            >
              {user && user.email === "hamadaahmed927@gmail.com" && (
                <Link to="/createItem">
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                        text-base "
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col   list-none">
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out px-4 py-2 "
                >
                  Home
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out px-4 py-2 "
                >
                  Menu
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out px-4 py-2 "
                >
                  About us
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor cursor-pointer
                duration-100 transition-all ease-in-out px-4 py-2 "
                >
                  Service
                </li>
              </ul>
              <p
                className="px-4 justify-center bg-gray-200 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor
                    text-base"
                onClick={logout}
              >
                logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

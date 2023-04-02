import React, { useEffect, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import notFound from "./images/notFound.svg";
import { categories } from "../utils/data";
import { useTheContext } from "../context/Provider";
import { actionType } from "../context/Reducer";

const RowContainer = ({ flag, data, autoUpdataRef }) => {
  const [{ cartItems }, dispatch] = useTheContext();

  const [items, setItems] = useState([]);



  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartitems", JSON.stringify(items));
  };

  useEffect(() => {
    addToCart()
  }, [items]);

  return (
    <div
      ref={autoUpdataRef}
      className={`w-full gap-3 flex flex-row my-12 bg-rowBg scrollbar-none scroll-smooth ${
        flag
          ? "overflow-x-scroll"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-[225px] flex flex-col items-center justify-between min-w-[300px] md:min-w-[340px] md:w-340 my-12 backdrop-blur-lg bg-cardOverlay rounded-lg p-2 hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between relative">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-40 -mt-8 object-contain h-40 drop-shadow-2xl"
                src={item?.imageURL}
                alt={item?.title}
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 absolute right-[30px] rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-lg text-white" />
              </motion.div>
            </div>
            <div className="w-full flex  flex-col items-end justify-end ">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textColor font-semibold ">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={notFound} alt="not found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            There is no Dishes{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;

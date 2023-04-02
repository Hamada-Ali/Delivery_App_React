import React, { useRef } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import {  MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useTheContext } from "../context/Provider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
const MainContainer = () => {

  const [{foodItems, cartShow}, dispatch] = useTheContext()

  const autoUpdataRef = useRef()

  const scroll = (scrollOffset) => {
    autoUpdataRef.current.scrollLeft += scrollOffset
  }

  return (
    <div className=" w-full h-auto flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-headingColor 
          relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500
          transition-all ease-in-out duration-100 from-orange-400 to-orange-600"
          >
            Our Fresh & healty Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center ">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 flex items-center hover:bg-orange-500 cursor-pointer  hover:shadow-lg justify-center "
            onClick={() => scroll(-200)}
            >
              <MdChevronLeft className="text-lg text-white " />
            </motion.div>
            <motion.div
              onClick={() => scroll(200)}
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 duration-100 flex items-center hover:bg-orange-500 cursor-pointer transition-all ease-in-out hover:shadow-lg justify-center "
            >
                <MdChevronRight className="text-lg text-white " />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} data={foodItems?.filter(item => item.category === 'fruits')} autoUpdataRef={autoUpdataRef}/> 
      </section>
      {/* Menu container */}
        <MenuContainer />

        {/* Cart container */}
        {cartShow && (
          <CartContainer />
        )}
    </div>
  );
};

export default MainContainer;

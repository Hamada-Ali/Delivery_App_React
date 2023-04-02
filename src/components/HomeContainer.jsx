import Bike from "./images/delivery.png";
import HeroBg from "./images/HeroBg.png";
import heropData from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col md:items-start items-center justify-center  gap-6">
        <div className="flex items-start gap-2 justify-start bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delievery
          </p>
          <div className="w-6 h-6 roudned-full overflow-hidden drop-shadow-xl">
            <img
              src={Bike}
              alt="bike delivery"
              className="w-full h-full object-contain bg-white rounded-full"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          {" "}
          The fast delivery in
          <span className=" text-[3rem] text-orange-600 lg:text-[5rem]">
            {" "}
            your city
          </span>
        </p>
        <p className="md:w-[80%] text-base text-textColor md:text-left text-center leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos in quas consequatur maiores, magni cumque officia esse
          facilis ratione ullam nihil ab nesciunt assumenda optio repudiandae
          natus repellendus ut.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500
               hover:shadow-lg md:w-[150px]  transition-all duration-100 ease-in-out w-full
                rounded-lg px-4 py-2"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <div className="w-full flex items-center justify-center ">
          <img
            src={HeroBg}
            className=" ml-auto h-420 w-full lg:w-auto  md:h-650"
            alt="home cover"
          />
          <div className="w-full gap-4 flex-wrap xl:px-32  h-full top-0 left-0 py-4 absolute flex items-center justify-center">
            {heropData &&
              heropData.map((data) => (
                <div
                key={data.id}
                  className="lg:w-190 md:min-w-210 md:min-h-[210px]  bg-cardOverlay backdrop-blur-md rounded-3xl p-4 flex items-center
                      justify-center flex-col md:flex-wrap drop-shadow-lg"
                >
                  <img src={data.imageSrc} alt={data.desc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" />
                  <p className="lg:text-xl text-base lg:mt-4 mt-2 font-semibold texttextColor">
                    {data.name}
                  </p>
                  <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                    {data.desc}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-500 ">$</span> {data.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;

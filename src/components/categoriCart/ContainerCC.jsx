import CategoriCard from "./CategoriCart";
import { dataCategori } from "./dataCategoris";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// Default theme
import "@splidejs/react-splide/css";

import { useRef } from "react";

function ContainerCC() {
  const splideRef = useRef(null);

  const goNext = () => splideRef.current?.splide.go(">");
  const goPrev = () => splideRef.current?.splide.go("<");
  return (
    <>
      {/* {dataCategori.map((item) => (
        <CategoriCard key={item.id} {...item} />
      ))} */}
      <div className="mt-15 flex justify-between items-center">
        <h1 className=" sm:text-[2rem] font-bold dark:text-[#ededed]">
          Shop By Categories
        </h1>
        <div>
          <button
            onClick={goNext}
            className="p-3 bg-[#ededed] dark:bg-[#4c4c4c] dark:hover:bg-[#ededed] dark:hover:text-black dark:text-white hover:bg-gray-300 mx-3 rounded-[9px] "
          >
            {" "}
            <FaArrowLeft />
          </button>
          <button
            onClick={goPrev}
            className="p-3 bg-[#ededed] dark:bg-[#4c4c4c] dark:hover:bg-[#ededed] dark:hover:text-black dark:text-white hover:bg-gray-300 mx-3 rounded-[9px] "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Splide
        ref={splideRef}
        className=" p-0! my-2"
        options={{
          type: "loop",
          easing: "ease",
          interval: 2000,
          autoScroll: {
            speed: 0.3,
          },

          pagination: false,
          arrows: false,
          gap: 15,
          perPage: 5,

          breakpoints: {
            1200: {
              perPage: 4,
            },
            992: {
              perPage: 3,
            },
            768: {
              perPage: 3,
              // gap:20
            },
            576: {
              perPage: 3,
            },
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        {dataCategori.map((item) => (
          <SplideSlide
            className="  
           md:w-[200px]! h-fit rounded-[9px]! overflow-hidden"
            key={item.id}
          >
            <CategoriCard {...item} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default ContainerCC;

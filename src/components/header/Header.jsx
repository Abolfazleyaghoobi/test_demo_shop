import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Header = () => {
  const title = useRef(null);

  const h2 = useRef(null);
  const title2 = useRef(null);
  const aLink = useRef(null);
  const border1 = useRef(null);
  const border2 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults:{
        duration:1,
        ease:"power4.out"
      }
    });
 
   tl.to(title.current, { x:0, opacity:1, ease:"power4.out"}) 
   .to(h2.current, { opacity:1, ease:"power4.out"})
   .to(title2.current, { x:0, opacity:1, ease:"power4.out"}) 
   .to(aLink.current, { x:0, opacity:1, ease:"power4.out"});
   gsap.to(border1.current, { duration:1,opacity:1,x:0, ease:"power4.out"})
   gsap.to(border2.current, { duration:1,opacity:1,x:0, ease:"power4.out"})

  })

  return (
    <>
      <section className="  bg-[#f0f0f0] dark:bg-[#3e3e3e] ">
        <div className="contianer">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2">
            {/* text title */}
            <div className=" flex items-center   ">
              <div className="  pl-6 md:pl-12 lg:pl-16 ">
                <h2
                  ref={title}
                  className="-translate-x-[23px] opacity-0 text-lg md:text-xl font-medium text-gray-700 dark:text-[#ededed]"
                >
                  Classic Exclusive
                </h2>

                <h1
                  ref={h2}
                  className=" -translate-x-[23px] opacity-0 text-[2rem] md:text-5xl lg:text-6xl font-bold text-black mt-2 ml-4 md:ml-0  dark:text-[#ededed]"
                >
                  Women's Collection
                </h1>

                <p
                  ref={title2}
                  className=" -translate-x-[23px] opacity-0 text-base md:text-lg font-medium text-gray-600 mt-3 md:mt-4 dark:text-[#ededed]"
                >
                  UPTO 40% OFF
                </p>

                <a
                  ref={aLink}
                  href="#"
                  className=" -translate-x-[23px] opacity-0 inline-flex items-center bg-gray-900 dark:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg mt-6 md:mt-8 mb-2 hover:bg-gray-700 transition-colors duration-300"
                >
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* image */}
            <div className=" xl:col-span-1 lg:col-span-2  flex justify-center items-center">
              <div className="lg:w-full    flex justify-center relative ">
                <div ref={border1} className="translate-x-8 opacity-0 absolute border-t-12 border-r-12 dark:border-[#4f4f4f] border-white border-l-12  lg:w-[50%] w-[80%] top-12    md:h-[300px] h-[40vh]"></div>
                <div ref={border2} className="-translate-x-8 opacity-0 absolute border-b-12 border-r-12 dark:border-[#4f4f4f] border-white border-l-12  lg:w-[50%] w-[80%]  lg:top-[50%] top-33 z-100 md:h-[300px] h-[40vh]"></div>
                <img
                  className="  lg:w-[60%] w-[300px] z-99"
                  src="./img/Picture11.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

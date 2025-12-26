import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useState } from "react";

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Model",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "https://i.pravatar.cc/80?img=1",
  },
  {
    name: "Jacob Jones",
    role: "Co-Founder",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "https://i.pravatar.cc/80?img=2",
  },
  {
    name: "Jenny Wilson",
    role: "Fashion Designer",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "https://i.pravatar.cc/80?img=3",
  },
  {
    name: "Jenny Wilson",
    role: "Fashion Designer",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "https://i.pravatar.cc/80?img=35",
  },
  {
    name: "Jenny Wilson",
    role: "Fashion Designer",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "https://i.pravatar.cc/80?img=44",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-[#ededed] dark:bg-[#3e3e3e] 
    ">
      <div className=" mx-auto px-4 container m-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          What our <span className="text-black dark:text-white">Customers</span> say
        </h2>

        {/* Splide Slider */}
        <Splide
          className="my-6"
          options={{
      
            perPage: 4,
            gap: 20,
            pagination: false,
            arrows: false,
          
            breakpoints: {
                1440: { perPage: 3 },
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
         
        >
          {testimonials.map((item, i) => (
            <SplideSlide key={i}>
              <div className="p-6 rounded-xl shadow-md bg-white dark:bg-neutral-900 border dark:border-neutral-700 h-full">
                <div className="flex items-center mb-4">{"⭐".repeat(5)}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{item.text}</p>
                <div className="flex items-center gap-3">
                  <img src={item.img} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

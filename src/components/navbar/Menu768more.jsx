import { IoIosArrowDown } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import logo2 from "../../assests/logo/logo2.svg";
import logo1 from "../../assests/logo/logo1.svg";

import Submenu from "./Submenu";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import useDarkMode from "../../Hooks/useDarkMode";

function Menu768Moreup() {
  const { mode, toggle } = useDarkMode("light");

  return (
    <>
      <section className="container m-auto">
        <div className="grid grid-cols-4   pt-4">
          {/* icon site */}
          <div>
            <Link part="/">
              <img
                className=" lg:w-[40%] md:w-[60%] w-[20%]"
                src={mode === "light" ? logo2 : logo1}
                alt=""
              />
            </Link>
          </div>
          {/* menu */}
          <div className="col-span-2 flex justify-center pt-3 ">
            <ul className="flex lg:gap-12  gap-4 dark:text-[#ededed]">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="flex relative group">
                Shop
                <span className=" h-fit mt-1 group-hover:rotate-180 transition-all duration-500">
                  <IoIosArrowDown />
                </span>
                {/* submenu */}
                <Submenu />
              </li>
              <li className="">
                <Link>Our Story</Link>{" "}
              </li>
              <li className="">
                <Link>Blog</Link>
              </li>
              <li className="">
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* icon favarite and search and card and btn(login) */}
          <div className="colo-span-1 ">
            <div className="flex  justify-end gap-4 align-center pt-1">
              <div className="flex lg:gap-5 md:gap-4 mt-2">
                <span className="cursor-pointer">
                  <GoSearch color={mode=="light"?'#000000':"#ededed"} size={20} />
                </span>
                <span className="cursor-pointer">
                  <MdFavoriteBorder color={mode=="light"?'#000000':"#ededed"} size={20} />
                </span>
                <span className="cursor-pointer">
                  <SlHandbag color={mode=="light"?'#000000':"#ededed"} size={20} />
                </span>
                <span className="cursor-pointer" onClick={toggle}>
                  {mode =="light" ? (
                    <MdOutlineDarkMode color="" size={25} />
                  ) : (
                    <MdOutlineLightMode color="ededed" size={25} />
                  )}
                </span>
              </div>
              <Link to="/login" className="lg:p-2  text-center mb-1 w-[25%] text-white dark:text-gray-700 dark:bg-gray-300 bg-black rounded-lg">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu768Moreup;

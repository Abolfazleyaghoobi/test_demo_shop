import { IoSearchSharp } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import useDarkMode from "../../Hooks/useDarkMode";


function MobileMenu() {
  const { mode, toggle } = useDarkMode('light');


  return (
    <>
      <section className="container m-auto">
        <div className="flex justify-between py-2 ">
          {/* search box */}
          <div className="flex pl-1 bg-gray-100 dark:bg-[#ededed]  w-[70%] ml-3 rounded-2xl">
            <p className="pt-1.5">
              <IoSearchSharp size={25} className="rotate-90" />
            </p>

            <input
              type="search"
              className="w-full col-span-2 border-0 outline-0 h-[80%] text-[1.2rem] p-1 mt-1"
              placeholder="Search"
            />
          </div>

          {/* favorite box */}
          <div className="flex mr-3 w-[25%] justify-center pt-0.5 gap-4">
            <span className="cursor-pointer">
              <MdFavoriteBorder color={mode == "light" ? "#000" : "#ededed"} size={30} />
            </span>
            <span className="cursor-pointer" onClick={toggle} title="Toggle theme">
             
              {
                mode == "light"?(<MdOutlineDarkMode  size={30}/>):(<MdOutlineLightMode color="#ededed" size={30}/>)
              }
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileMenu;
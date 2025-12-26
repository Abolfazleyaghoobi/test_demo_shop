import { MdHome } from "react-icons/md";
import useDarkMode from "../../Hooks/useDarkMode";
import { CiUser } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
function NavBarBottom() {
  const { mode, toggle } = useDarkMode("light");

  return (
    <>
      <section className="container m-auto">
        <div className={`grid-cols-4 grid `}>
            <p className={`dark:bg-[#8] w-fit m-auto my-1 p-1 rounded-[9px] ${mode=="light"?"text-black":"text-white"}`}>
            <IoHomeOutline  className="ml-2.5 mt-1.5" size={20} />
            <Link>Home</Link>
            </p>
            <p className="dark:bg-[#8] w-fit m-auto my-1 p-1 rounded-[9px]">
            <BiCategory className="ml-7" size={25} />
            <Link>Categories</Link>
            </p>
            <p className="dark:bg-[#8] w-15 m-auto my-1 p-1  rounded-[9px] text-center">
                <SlHandbag color={mode=="light"?"black":"white"} className="ml-4 mt-1.5" size={20}/>
                <Link>Cart</Link>
            </p>
            <p className="dark:bg-[#8] w-fit m-auto my-1 p-1 rounded-[9px]">
            <CiUser className="ml-3" size={25} />
            <Link>Profile</Link>
            </p>


        </div>
      </section>
    </>
  );
}

export default NavBarBottom;

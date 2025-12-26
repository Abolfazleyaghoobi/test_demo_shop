import React, { useEffect, useState } from "react";

import Menu768Moreup from "./Menu768more";
import MobileMenu from "./MobileMenu";
import NavBarBottom from "./NavBarBottom";

function NavBard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handlerResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, []);
  return (
    <>
      {/* <section className="sticky top-0 bg-white dark:bg-[#2b2b2b] shadow">
        {
         windowWidth>991? <Menu768Moreup/>: <MobileMenu/>
        }
        
        
      </section> */}
      {windowWidth > 991 ? (
        <section className="sticky z-999 top-0 bg-white dark:bg-[#2b2b2b] shadow">
          <Menu768Moreup />
        </section>
      ) : (
        <>
          <section className="sticky z-999 top-0 bg-white dark:bg-[#2b2b2b] shadow">
            <MobileMenu />
          </section>
          <section className="fixed z-999 bottom-0 w-full bg-white dark:bg-[#2b2b2b] shadow">
            <NavBarBottom />
          </section>
        </>
      )}
    </>
  );
}
// <MdOutlineLightMode />
export default NavBard;

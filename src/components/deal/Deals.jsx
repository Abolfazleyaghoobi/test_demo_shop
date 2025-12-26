import gsap from "gsap";
import DelasContent from "./DealsContent";
import Picture from "./Pic";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerEase(useGSAP)


function Deals() {
    const pic=useRef(null)
    const deal=useRef(null)
  useGSAP(()=>{
    gsap.from(pic.current,{
        opacity:0,
        x:100,
        duration:1,
        ease:"power4.out",
        scrollTrigger:{
            trigger:pic.current,
            start:"top 80%",
            end:"top 20%",
            scrub:true,
        }
    })
    gsap.from(deal.current,{
        opacity:0,
        x:-100,
        duration:1,
        ease:"power4.out",
        scrollTrigger:{
          
            trigger:deal.current,
            start:"top 80%",
            end:"bottom 70%",
            scrub:true,
        }
    })



  },[])
    return (  
        <>
         <div className="grid md:grid-cols-2 grid-cols-1  md:mt-6 mb-3">
            <div className="flex items-center" ref={deal}>
                <DelasContent/>
            </div>
            <div className="flex md:justify-end justify-center relative" ref={pic}>
                <Picture/>  
            </div>
         </div>
        </>
    );
}

export default Deals

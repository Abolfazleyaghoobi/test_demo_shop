import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
function DelasContent() {
  const [time, setTime] = useState({
    days: 120,
    hours: 18,
    mins: 15,
    secs: 10,
  });
  const [countdownStarted, setCountdownStarted] = useState(false);
  const countdownRef = useRef(null); // نگه داشتن interval صحیح
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
     
          trigger: sectionRef.current,
          start: "top 70%",
          once: true, // فقط یک بار اجرا بشه
          onEnter: () => {
            if (!countdownStarted) {
              startCountdown();
              setCountdownStarted(true);
            }
          },
        },
      });
    });
    return () => mm.revert();
  }, []);

  const startCountdown = () => {
    // جلوگیری از اجرای دوباره interval
    if (countdownRef.current) return;

    countdownRef.current = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else if (mins > 0) {
          mins--;
          secs = 59;
        } else if (hours > 0) {
          hours--;
          mins = 59;
          secs = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          mins = 59;
          secs = 59;
        } else {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
  };

  // در صورت unmount شدن یا تغییرات احتمالی، پاک‌سازی
  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  // startCountdown();

  return (
    <>
      <div ref={sectionRef}>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#ededed]">
          Deal of the Month
        </h1>
        <p className="text-gray-500 dark:text-[#ededed] mt-4 leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 mt-6">
          {[
            { time: time.days, label: "Days" },
            { time: time.hours, label: "Hours" },
            { time: time.mins, label: "Mins" },
            { time: time.secs, label: "Secs" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#3f3f3f] dark:shadow-[0px_3px_8px_rgba(0,0,0,0.50)] rounded-lg py-3 px-5 text-center shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-[#ededed]">{item.time}</h2>
              <p className="text-sm text-gray-500 dark:text-[#ededed]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg mt-8 hover:bg-gray-800 transition-all duration-300"
        >
          View All Products <MdOutlineArrowRightAlt className="text-xl" />
        </a>
      </div>
    </>
  );
}

export default DelasContent;

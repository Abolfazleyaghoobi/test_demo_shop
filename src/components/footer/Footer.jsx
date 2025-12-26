import React from 'react';
// ایمپورت آیکون‌های اصلی (خطی و ظریف)
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiArrowRight, 
  FiFacebook, 
  FiInstagram, 
  FiTwitter 
} from 'react-icons/fi';

// ایمپورت آیکون‌های پرداخت (برای جذابیت بیشتر)
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131118] dark:bg-[#3d3d3d] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans border-t border-gray-800">
      {/* --- بخش اصلی فوتر --- */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
        {/* ستون ۱: برند و تماس */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight flex items-center">
            {/* شبیه‌سازی لوگو */}
            <span className="text-4xl mr-1 font-extrabold">K</span>rist
          </h2>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FiPhone className="text-white text-lg" />
              <span>(704) 555-0127</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-white text-lg" />
              <span>krist@example.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-white text-xl shrink-0 mt-1" />
              <span className="leading-relaxed">
                3891 Ranchview Dr. Richardson, <br />
                California 62639
              </span>
            </div>
          </div>
        </div>

        {/* ستون ۲: اطلاعات */}
        <div>
          <h3 className="text-lg font-bold mb-6">Information</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My Cart</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Checkout</a></li>
          </ul>
        </div>

        {/* ستون ۳: سرویس‌ها */}
        <div>
          <h3 className="text-lg font-bold mb-6">Service</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* ستون ۴: خبرنامه (Subscribe) */}
        <div>
          <h3 className="text-lg font-bold mb-6">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          
          {/* اینپوت ایمیل */}
          <div className="relative group">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg z-10" />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-transparent border border-gray-500 rounded-md py-3 pl-10 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-opacity">
              <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* --- خط جداکننده --- */}
      <hr className="border-gray-800 mb-8" />

      {/* --- بخش پایین فوتر --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* آیکون‌های پرداخت (استفاده از آیکون‌های FontAwesome موجود در react-icons) */}
        <div className="flex items-center gap-4 text-3xl opacity-90">
            <FaCcVisa className="text-white" />
            <FaCcMastercard className="text-white" />
            <FaGooglePay className="text-white" />
            <FaCcAmex className="text-white" />
            <FaCcPaypal className="text-white" />
        </div>

        {/* کپی‌رایت */}
        <div className="text-sm text-gray-400 text-center md:text-left order-3 md:order-2">
          ©2023 Krist All Rights are reserved
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <a href="#" className="hover:text-gray-300 transition-colors"><FiFacebook className="text-xl" /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FiInstagram className="text-xl" /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FiTwitter className="text-xl" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
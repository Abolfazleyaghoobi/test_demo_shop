// const Submenu = () => {
//     return (
//       <div className="w-[120px] h-[120px] bg-red-400 invisible absolute top-5 left-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
        
          
//       </div>
//     );
//   };

//   export default Submenu;
import React from "react";

export default function Submenu() {
  return (
    <div className="w-200 bg-white border p-8 grid grid-cols-4 gap-10 text-gray-800 invisible absolute top-5 -left-50 rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
      {/* Men */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg mb-2">Men</h3>
        <a href="#">T-Shirts</a>
        <a href="#">Casual Shirts</a>
        <a href="#">Formal Shirts</a>
        <a href="#">Jackets</a>
        <a href="#">Blazers & Coats</a>

        <h4 className="font-semibold mt-4">Indian & Festive Wear</h4>
        <a href="#">Kurtas & Kurta Sets</a>
        <a href="#">Sherwanis</a>
      </div>

      {/* Women */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg mb-2">Women</h3>
        <a href="#">Kurtas & Suits</a>
        <a href="#">Sarees</a>
        <a href="#">Ethnic Wear</a>
        <a href="#">Lehenga Cholis</a>
        <a href="#">Jackets</a>

        <h4 className="font-semibold mt-4">Western Wear</h4>
        <a href="#">Dresses</a>
        <a href="#">Jumpsuits</a>
      </div>

      {/* Footwear */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg mb-2">Footwear</h3>
        <a href="#">Flats</a>
        <a href="#">Casual Shoes</a>
        <a href="#">Heels</a>
        <a href="#">Boots</a>
        <a href="#">Sports Shoes & Floaters</a>

        <h4 className="font-semibold mt-4">Product Features</h4>
        <a href="#">360 Product Viewer</a>
        <a href="#">Product with Video</a>
      </div>

      {/* Kids */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg mb-2">Kids</h3>
        <a href="#">T-Shirts</a>
        <a href="#">Shirts</a>
        <a href="#">Jeans</a>
        <a href="#">Trousers</a>
        <a href="#">Party Wear</a>
        <a href="#">Innerwear & Thermal</a>
        <a href="#">Track Pants</a>
        <a href="#">Value Pack</a>
      </div>
    </div>
  );
}

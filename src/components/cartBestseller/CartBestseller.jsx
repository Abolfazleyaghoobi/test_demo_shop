import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { addToFavorite } from "../../redux/slices/featchProduct";
// <MdOutlineFavorite />
function CartBestseller(data) {
  const imageFailed =
    "https://uploadkon.ir/uploads/221d26_25file-000000002a5071f4b76361d85fc3ebb3-1-.png";
  let { id, img, price, discount, isFavorite } = data;


  // const  dispatch=useDispatch();
  const sentToFavorite = () => {
    // console.log(isFavorite);
    isFavorite = true;
    // dispatch(addToFavorite(data))
    // console.log(isFavorite);
  };
  return (
    <>
      {/* conainer */}
      <div className="lg:w-[18%] sm:w-[30%] w-[47%] dark:shadow-[0px_3px_8px_rgba(0,0,0,0.50)] shadow-[0px_3px_8px_rgba(0,0,0,0.20)]  my-3 rounded-[9px] lg:h-[41vh] h-12 overflow-hidden group">
        {/* image */}
        <div className="relative">
          <img
            className="bg-[#e7e7e7cd] dark:bg-[#3f3f3f]"
            src={img}
            onError={(e) => {
          
              if (e.currentTarget.src !== imageFailed) {
                e.currentTarget.src = imageFailed;
              }
            }}
          
            alt=""
          />
          <div className="absolute top-0 bg-[#f5303000]  w-full h-full flex flex-col justify-between gap-2 invisible group-hover:visible">
            <div className="flex  p-1 pt-5  flex-col items-end gap-7">
              <span>
                <GrFavorite
                  className="text-gray-800 dark:text-gray-300 cursor-pointer dark:hover:text-red-500"
                  size={23}
                />
              </span>
              <span>
                <FaRegEye
                  className="text-gray-800 dark:text-gray-300 cursor-pointer dark:hover:text-white"
                  size={23}
                />
              </span>
            </div>
            <button className="p-2 xl:mt-15 bg-white dark:bg-gray-300 dark:hover:bg-gray-400 dark:hover:text-white w-[80%] m-auto rounded-[9px]">
              Add to Cart
            </button>
          </div>
        </div>
        {/* mini info product */}
        <div className="p-1.5">
          {/* marke model product */}
          <h2 className="dark:text-[#ededed] font-bold">Adidas</h2>
          <p className="text-[14px] dark:text-[#ededed]">
            Men adi-dash Running shoes
          </p>
          <div className="flex mt-3">
            <p className="flex dark:text-[#ededed]">
              <CgDollar size={20} />{" "}
              <span className="text-black text-[14px] dark:text-[#ededed] ">
                {discount.price}.00
              </span>{" "}
            </p>
            <p className="flex ml-2 items-center text-[#919191]  line-through">
              <CgDollar /> <span className="text-[13px]">{price}.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartBestseller;
// import { GrFavorite } from "react-icons/gr";
// import { CgDollar } from "react-icons/cg";
// import { FaRegEye } from "react-icons/fa";

// function CartBestseller(props) {
//   const imageFailed =
//     "https://uploadkon.ir/uploads/221d26_25file-000000002a5071f4b76361d85fc3ebb3-1-.png";

//   const { img, price, discount } = props;

//   return (
//     /* container */
//     <div
//       className="
//         w-[47%]
//         sm:w-[30%]
//         lg:w-[18%]
//         h-[55vh]
//         sm:h-[45vh]
//         lg:h-[41vh]
//         dark:shadow-[0px_3px_8px_rgba(0,0,0,0.50)]
//         shadow-[0px_3px_8px_rgba(0,0,0,0.20)]
//         my-3
//         rounded-[9px]
//         overflow-hidden
//         group
//         bg-white
//         dark:bg-[#2b2b2b]
//       "
//     >
//       {/* image */}
//       <div className="relative h-[55%]">
//         <img
//           className="w-full h-full object-cover bg-[#e7e7e7cd] dark:bg-[#3f3f3f]"
//           src={img}
//           onError={(e) => {
//             if (e.currentTarget.src !== imageFailed) {
//               e.currentTarget.src = imageFailed;
//             }
//           }}
//           alt=""
//         />

//         {/* overlay icons */}
//         <div
//           className="
//             absolute top-0 w-full h-full
//             flex flex-col justify-between
//             opacity-100
//             sm:opacity-0 sm:group-hover:opacity-100
//             transition
//           "
//         >
//           <div className="flex p-2 pt-4 flex-col items-end gap-6">
//             <GrFavorite
//               className="text-gray-800 dark:text-gray-300 cursor-pointer dark:hover:text-red-500"
//               size={22}
//             />
//             <FaRegEye
//               className="text-gray-800 dark:text-gray-300 cursor-pointer dark:hover:text-white"
//               size={22}
//             />
//           </div>

//           <button className="p-2 bg-white dark:bg-gray-300 dark:hover:bg-gray-400 dark:hover:text-white w-[80%] mx-auto mb-3 rounded-[9px]">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* info */}
//       <div className="p-2">
//         <h2 className="dark:text-[#ededed] font-bold text-sm">
//           Adidas
//         </h2>

//         <p className="text-[13px] dark:text-[#ededed]">
//           Men adi-dash Running shoes
//         </p>

//         <div className="flex mt-2 items-center">
//           <p className="flex dark:text-[#ededed] text-sm font-semibold">
//             <CgDollar size={18} />
//             <span>{discount?.price}.00</span>
//           </p>

//           <p className="flex ml-2 items-center text-[#919191] line-through text-sm">
//             <CgDollar size={16} />
//             <span>{price}.00</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartBestseller;

// import { useDispatch, useSelector } from "react-redux";
// import CartBestseller from "./CartBestseller";
// import { dataestsellerProduct } from "./dataBestsellerProduct";
// import { useEffect } from "react";
// import { fetchbestseller } from "../../redux/slices/bestseller";
// function ContainerBestseller() {

  
//   const dispatch= useDispatch()
//  const bestsellerProducts=useSelector(store=>store.bestseller.bestseller)
// //  console.log('bestsellerProducts: ', bestsellerProducts);
//   useEffect(()=>{
//     dispatch(fetchbestseller())
//   },[])
//   return (
  //     <div className="max-w-[1200px] m-auto ">
  //       <h1 className="text-center dark:text-white font-bold text-[2rem]">
  //         Our Bestseller
  //       </h1>
  //       <div className="flex flex-wrap justify-center gap-4">
  //         {
//           bestsellerProducts.map((item)=>(
//             <CartBestseller key={item._id} {...item} />
//           ))
//         }

//       </div>
//     </div>
//   );
// }

// export default ContainerBestseller;
import { useDispatch, useSelector } from "react-redux";
import CartBestseller from "./CartBestseller";
import { useEffect, useEffectEvent } from "react";
import { fetchbestseller } from "../../redux/slices/bestseller";

function ContainerBestseller() {
  const dispatch = useDispatch();
  
  const bestsellerProducts = useSelector(
    (store) => store.bestseller.bestseller
  );
  
  // useEffect(() => {
    //   dispatch(fetchbestseller());
    // }, [dispatch]);
    useEffect(()=>{
          dispatch(fetchbestseller())
      
    },[dispatch])
  return (
    <div className="max-w-[1200px] mx-auto px-2 bg-amber-300">
      <h1 className="text-center dark:text-white font-bold text-[2rem] my-6">
        Our Bestseller
      </h1>
      <div className="flex flex-wrap justify-center gap-4 bg-sky-500 ">
  
        {Array.isArray(bestsellerProducts) &&
          bestsellerProducts.map((item) => (
            <CartBestseller key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default ContainerBestseller;

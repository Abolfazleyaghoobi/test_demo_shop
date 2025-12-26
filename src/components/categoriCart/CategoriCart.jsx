function CategoriCard({title,img,titleBTN}) {
  return (
    <>
      <div className="w-full sm:h-60 h-45  bg-[#f0f0f0] dark:bg-[#777777] relative  overflow-hidden ">
        <h2 className="absolute sm:text-[3rem] text-[1.5rem] z-1 LEFT-0 sm:-top-3 -top-1 font-bold text-[#d8d8d8]">{title}</h2>

        <div className="">
          <img className="object-cover absolute z-2 md:-right-4 right-0 sm:h-[250px] h-[170px] sm:top-0 top-4" src={img}  alt="" />
        </div>
        <button className="absolute z-3 bottom-2 md:left-[22%] sm:left-[20%] left-[10%] bg-white dark:bg-[#929292] dark:hover:bg-[#6d6d6d] dark:text-white sm:px-3  px-0.5 py-2 rounded-[9px]  ">{titleBTN}</button>
      </div>
    </>
  );
}

export default CategoriCard;
// xxl:w-[70%] m-auto  md:w-full w-[170px] h-[225px] md:h-[32vh] ] rounded-[9px]
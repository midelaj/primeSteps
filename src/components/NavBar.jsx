import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex h-20 items-center justify-center ">
        <div onClick={handleNav} className="absolute left-6">
          {nav ? <AiOutlineClose size={25} /> : <TiThMenuOutline size={25} />}
        </div>

        <div>
          <h1 className="justify-center font-bold text-xl ">Prime Steps</h1>
        </div>
        <div className="flex space-x-3 absolute right-5">
          <div className="md:w-5 md:h-5 sm:w-4 sm:h-4 w-6 h-6">
            <FaRegUser className="w-full h-full" />
          </div>
          <div className="md:w-5 md:h-5 sm:w-4 sm:h-4 w-6 h-6">
            <IoCartOutline className="w-full h-full" />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute pl-4 w-[70%] h-full bg-[#E4E4E4] ease-in-out delay-100"
            : "absolute left-[-100%]"
        }
      >
        <p className="text-3xl mt-4 ">Sneaker</p>
        <p className="text-3xl mt-4 ">Sports</p>
        <p className="text-3xl mt-4 ">Bags</p>
      </div>
    </div>
  );
}

export default NavBar;

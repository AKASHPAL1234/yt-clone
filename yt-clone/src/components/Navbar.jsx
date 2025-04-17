import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import Logo from "../assets/y-logo.png";
import Profile from '../assets/profile.jpg';

import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/Utilcontext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar]);

  const searchQueryHandeler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handlesidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };
  if (searchbar) {
    return (
      <div className="flex  justify-between  top-0 w-[100%] px-6 py-2 items-center  ">
        <IoArrowBackSharp size={20} onClick={()=>setSearchbar(!searchbar)}/>

        <div className="  flex flex-grow items-center mx-4  ">
        <div className="w-[100%] px-3 py-2   border border-gray-400  rounded-l-full ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none  "
            onChange={(e)=>setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandeler}
            value={searchQuery}
          />
        </div>
        <button className="px-4 py-2  bg-gray-200 border border-gray-400  rounded-r-full"
          onClick={()=>searchQueryHandeler("searchButton")}>
          <CiSearch className="text-2xl " />
      </button>
      </div>        <IoMic size={"42px"} className=" ml-3 mt-1  border border-gray-400 rounded-full p-1 cursor-pointer hover:bg-gray-300 duration-200" />

      </div>
    );
  }

  return (
    <div className="flex  justify-between  top-0 w-[100%] px-6 py-2  ">
      <div className=" flex items-center  space-x-3 cursor-pointer   ">
        <RxHamburgerMenu
          className="text-2xl cursor-pointer  "
          onClick={handlesidebar}
        />
        <img className="w-28 " src={Logo}></img>
      </div>

      <div className="  hidden  md:flex  w-[40%] h-10  ">
        <div className="w-[100%] px-3 py-2   border border-gray-400  rounded-l-full ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none  "
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandeler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2  bg-gray-200 border border-gray-400  rounded-r-full"
          onClick={() => searchQueryHandeler("searchButton")}
        >
          <CiSearch className="text-2xl " />
        </button>
        <IoMic
          size={"42px"}
          className=" ml-3 mt-1  border border-gray-400 rounded-full p-1 cursor-pointer hover:bg-gray-300 duration-200"
        />
      </div>

      <div className=" flex   space-x-3  justify-between items-center ">
        <div className="flex">
          <CiSearch
            className="text-2xl xl:hidden"
            onClick={() => {
              setSearchbar(!searchbar);
            }}
          />
          <FiPlus size={"28px"} className="muted cursor-pointer  " />
        </div>
        <FaRegBell size={"28px"} className="cursor-pointer" />
        <img
          className="h-10 border rounded-full cursor-pointer"
          src={Profile}
        ></img>
      </div>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import Avatar from "react-avatar";

// import { AiOutlineMenu } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";
// import { IoMdMic } from "react-icons/io";
// import { RiVideoAddLine } from "react-icons/ri";
// import { AiOutlineBell } from "react-icons/ai";

// import Logo from "../assets/y-logo.png";
// import Profile from "../assets/Profile.jpg";
// import { useNavigate } from "react-router-dom";
// function Navbar() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   const searchQueryHandler = (event) => {
//     if (
//       (event?.key === "Enter" || event === "searchButton") &&
//       searchQuery?.length > 0
//     ) {
//       navigate(`/search/${searchQuery}`);
//       setSearchQuery("");
//     }
//   };

//   return (
//     <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
//       <div className="flex items-center space-x-4  ">
//         <AiOutlineMenu className="text-xl cursor-pointer" />
//         <img src={logo} alt="" className="w-28 cursor-pointer" />
//       </div>
//       <div className="flex w-[35%] items-center ">
//         <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
//           <input
//             type="text"
//             placeholder="Search"
//             className=" outline-none"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyUp={searchQueryHandler}
//             value={searchQuery}
//           />
//         </div>
//         <button
//           className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
//           onClick={() => searchQueryHandler("searchButton")}
//         >
//           <CiSearch size={"24px"} />
//         </button>
//         <IoMdMic
//           size={"42px"}
//           className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
//         />
//       </div>
//       <div className="flex  space-x-5 items-center ">
//         <RiVideoAddLine className="text-2xl" />
//         <AiOutlineBell className="text-2xl" />
//         <Avatar src={profile} size="32" round={true} />
//       </div>
//     </div>
//   );
// }

// export default Navbar;

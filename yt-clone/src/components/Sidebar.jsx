import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import { MdOutlineMovie } from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdPodcasts } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { LuBookMarked } from "react-icons/lu";
import { SiTrendmicro } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useUtils } from "../context/Utilcontext";

export default function sideBar() {
  // const SidebarItem1 = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     icon: <GoHomeFill />,
  //   },
  //   {
  //     id: 2,
  //     name: "Shorts",
  //     icon: <SiYoutubeshorts />,
  //   },
  //   {
  //     id: 3,
  //     name: "Subscription",
  //     icon: <MdOutlineSubscriptions />,
  //   },
  // ];
  // const SidebarItem2 = [
  //   {
  //     id: 1,
  //     name: "History",
  //     icon: <FaHistory />,
  //   },
  //   {
  //     id: 2,
  //     name: "Platlist",
  //     icon: <MdOutlinePlaylistPlay />,
  //   },
  //   {
  //     id: 3,
  //     name: "Your video",
  //     icon: <GoVideo />,
  //   },
  //   {
  //     id: 4,
  //     name: "Watch later",
  //     icon: <MdOutlineWatchLater />,
  //   },
  //   {
  //     id: 5,
  //     name: "Liked video",
  //     icon: <GrLike />,
  //   },
  // ];
  // const SidebarItem3 = [
  //   {
  //     id: 1,
  //     name: "Tranding",
  //     icon: <SiTrendmicro />,
  //   },
  //   {
  //     id: 2,
  //     name: "Shopping",
  //     icon: <RiShoppingBag4Line />,
  //   },
  //   {
  //     id: 3,
  //     name: "Music",
  //     icon: <LuMusic4 />,
  //   },
  //   {
  //     id: 4,
  //     name: "Movies",
  //     icon: <MdOutlineMovie />,
  //   },
  //   {
  //     id: 5,
  //     name: "Live",
  //     icon: <CgMediaLive />,
  //   },
  //   {
  //     id: 6,
  //     name: "Gaming",
  //     icon: <SiYoutubegaming />,
  //   },
  //   {
  //     id: 7,
  //     name: "News",
  //     icon: <FaRegNewspaper />,
  //   },
  //   {
  //     id: 8,
  //     name: "Sports",
  //     icon: <TfiCup />,
  //   },
  //   {
  //     id: 9,
  //     name: "Courses",
  //     icon: <LuBookMarked />,
  //   },
  //   {
  //     id: 10,
  //     name: "Fasion&Beauty",
  //     icon: <SiStylelint />,
  //   },
  //   {
  //     id: 11,
  //     name: "Podcast",
  //     icon: <MdPodcasts />,
  //   },
  // ];
  // const SidebarItem4 = [
  //   {
  //     id: 1,
  //     name: "YTube Premimum",
  //     icon: <FaYoutube />,
  //   },
  //   {
  //     id: 2,
  //     name: "YouTube studio",
  //     icon: <SiYoutubestudio />,
  //   },
  //   {
  //     id: 3,
  //     name: "YouTube Music",
  //     icon: <SiYoutubemusic />,
  //   },
  //   {
  //     id: 4,
  //     name: "YouTube Kids",
  //     icon: <SiYoutubekids />,
  //   },
  // ];
  // const SidebarItem5 = [
  //   {
  //     id: 1,
  //     name: "Settings",
  //     icon: <IoSettingsOutline />,
  //   },
  //   {
  //     id: 2,
  //     name: "Report History",
  //     icon: <FiFlag />,
  //   },
  //   {
  //     id: 3,
  //     name: "Help",
  //     icon: <IoIosHelpCircleOutline />,
  //   },
  //   {
  //     id: 4,
  //     name: "Send feedback",
  //     icon: <MdOutlineFeedback />,
  //   },
  // ];

  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();

  const sidebaritem = [
    {
      groupName: "Home ",
      groupItem: [
        {
          id: 1,
          name: "Home",
          icon: <GoHomeFill />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscription",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },

    {
      groupName: "You ",
      groupItem: [
        {
          id: 1,
          name: "History",
          icon: <FaHistory />,
        },
        {
          id: 2,
          name: "Platlist",
          icon: <MdOutlinePlaylistPlay />,
        },
        {
          id: 3,
          name: "Your video",
          icon: <GoVideo />,
        },
        {
          id: 4,
          name: "Watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 5,
          name: "Liked video",
          icon: <GrLike />,
        },
      ],
    },

    {
      groupName: "Explore ",
      groupItem: [
        {
          id: 1,
          name: "Tranding",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <RiShoppingBag4Line />,
        },
        {
          id: 3,
          name: "Music",
          icon: <LuMusic4 />,
        },
        {
          id: 4,
          name: "Movies",
          icon: <MdOutlineMovie />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sports",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <LuBookMarked />,
        },
        {
          id: 10,
          name: "Fasion&Beauty",
          icon: <SiStylelint />,
        },
        {
          id: 11,
          name: "Podcast",
          icon: <MdPodcasts />,
        },
      ],
    },

    {
      groupName: "more for youtube ",
      groupItem: [
        {
          id: 1,
          name: "YTube Premimum",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "YouTube studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "YouTube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "YouTube Kids",
          icon: <SiYoutubekids />,
        },
      ],
    },

    {
      groupName: "Setting ",
      groupItem: [
        {
          id: 1,
          name: "Settings",
          icon: <IoSettingsOutline />,
        },
        {
          id: 2,
          name: "Report History",
          icon: <FiFlag />,
        },
        {
          id: 3,
          name: "Help",
          icon: <IoIosHelpCircleOutline />,
        },
        {
          id: 4,
          name: "Send feedback",
          icon: <MdOutlineFeedback />,
        },
      ],
    },
  ];

  const ModelOverPlay = () => {
    return (
      <div
        className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
        onClick={() => {
          setMobileShow(!mobileShow);
        }}
      ></div>
    );
  };

  return (
    <>
      <div
        className={`${
          mobileShow
            ? "fix top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%] "
            : " hidden h-[calc(100vh-6.625rem)] w-[28%]"
        } " xl:static xl:block px-2  overflow-y-scroll overflow-x-hidden  "`}
      >
        <div className="space-y-3  items-center  ">
          {sidebaritem.map((group) => {
            return (
              <div className="mb-5">
                <h1 className="font-bold ">{group.groupName}</h1>
                {group.groupItem.map((items) => (
                  <div
                    key={items.id}
                    className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1 my-2"
                  >
                    <div className=" text-xl cursor-pointer">{items.icon}</div>
                    <span className=" cursor-pointer">{items.name}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <br></br>
        <hr></hr>

        {/* <div className=" mt-4 space-y-2  items-center  ">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl mb-2">
            <b>You</b>
          </h1>
          <FaChevronRight />
        </div>
        {SidebarItem2.map((item) => {
          return (
            <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
              <div className=" text-xl cursor-pointer">{item.icon}</div>
              <span className=" cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br></br>
      <hr></hr>

      <div className=" mt-4 space-y-2  items-center  ">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl mb-2">
            <b>Explor</b>
          </h1>
        </div>
        {SidebarItem3.map((item) => {
          return (
            <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
              <div className=" text-xl cursor-pointer">{item.icon}</div>
              <span className=" cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br></br>
      <hr></hr>

      <div className=" mt-4 space-y-2  items-center  ">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl mb-2">
            <b>More from YouTube</b>
          </h1>
        </div>
        {SidebarItem4.map((item) => {
          return (
            <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
              <div className=" text-xl cursor-pointer text-red-500">
                {item.icon}
              </div>
              <span className=" cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br></br>
      <hr></hr>

      <div className=" mt-4 space-y-2  items-center  ">
        {SidebarItem5.map((item) => {
          return (
            <div   key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
              <div className=" text-xl cursor-pointer">{item.icon}</div>
              <span className=" cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br></br>
      <hr></hr>
      <br /> */}

        <span className="text-xs font-semibold text-gray-500">
          About Press Copy rightContact<br></br> usCreators Advertise<br></br>{" "}
          Developers<br></br>
          <br />
          <p>
            Terms Privacy Policy & Safety <br></br>How YouTube works <br></br>
            Test new features
          </p>
          <br />© 2025 Google LLC
        </span>
      </div>

{mobileShow?<ModelOverPlay/>:null}

    </>
  );
}

// import React from "react";
// import { GoHomeFill } from "react-icons/go";
// import { SiYoutubeshorts } from "react-icons/si";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { FaHistory } from "react-icons/fa";
// import { MdOutlinePlaylistPlay } from "react-icons/md";
// import { GoVideo } from "react-icons/go";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { GrLike } from "react-icons/gr";
// import { FaChevronRight } from "react-icons/fa";
// import { RiShoppingBag4Line } from "react-icons/ri";
// import { LuMusic4 } from "react-icons/lu";
// import { MdOutlineMovie } from "react-icons/md";
// import { CgMediaLive } from "react-icons/cg";
// import { SiYoutubegaming } from "react-icons/si";
// import { FaRegNewspaper } from "react-icons/fa";
// import { TfiCup } from "react-icons/tfi";
// import { MdPodcasts } from "react-icons/md";
// import { SiStylelint } from "react-icons/si";
// import { LuBookMarked } from "react-icons/lu";
// import { SiTrendmicro } from "react-icons/si";
// import { SiYoutubemusic } from "react-icons/si";
// import { SiYoutubekids } from "react-icons/si";
// import { SiYoutubestudio } from "react-icons/si";
// import { FaYoutube } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FiFlag } from "react-icons/fi";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { MdOutlineFeedback } from "react-icons/md";

// export default function sideBar() {
// const SidebarItem1 = [
//   {
//     id: 1,
//     name: "Home",
//     icon: <GoHomeFill />,
//   },
//   {
//     id: 2,
//     name: "Shorts",
//     icon: <SiYoutubeshorts />,
//   },
//   {
//     id: 3,
//     name: "Subscription",
//     icon: <MdOutlineSubscriptions />,
//   },
// ];
// const SidebarItem2 = [
//   {
//     id: 1,
//     name: "History",
//     icon: <FaHistory />,
//   },
//   {
//     id: 2,
//     name: "Platlist",
//     icon: <MdOutlinePlaylistPlay />,
//   },
//   {
//     id: 3,
//     name: "Your video",
//     icon: <GoVideo />,
//   },
//   {
//     id: 4,
//     name: "Watch later",
//     icon: <MdOutlineWatchLater />,
//   },
//   {
//     id: 5,
//     name: "Liked video",
//     icon: <GrLike />,
//   },
// ];
// const SidebarItem3 = [
//   {
//     id: 1,
//     name: "Tranding",
//     icon: <SiTrendmicro />,
//   },
//   {
//     id: 2,
//     name: "Shopping",
//     icon: <RiShoppingBag4Line />,
//   },
//   {
//     id: 3,
//     name: "Music",
//     icon: <LuMusic4 />,
//   },
//   {
//     id: 4,
//     name: "Movies",
//     icon: <MdOutlineMovie />,
//   },
//   {
//     id: 5,
//     name: "Live",
//     icon: <CgMediaLive />,
//   },
//   {
//     id: 6,
//     name: "Gaming",
//     icon: <SiYoutubegaming />,
//   },
//   {
//     id: 7,
//     name: "News",
//     icon: <FaRegNewspaper />,
//   },
//   {
//     id: 8,
//     name: "Sports",
//     icon: <TfiCup />,
//   },
//   {
//     id: 9,
//     name: "Courses",
//     icon: <LuBookMarked />,
//   },
//   {
//     id: 10,
//     name: "Fasion&Beauty",
//     icon: <SiStylelint />,
//   },
//   {
//     id: 11,
//     name: "Podcast",
//     icon: <MdPodcasts />,
//   },
// ];
// const SidebarItem4 = [
//   {
//     id: 1,
//     name: "YTube Premimum",
//     icon: <FaYoutube />,
//   },
//   {
//     id: 2,
//     name: "YouTube studio",
//     icon: <SiYoutubestudio />,
//   },
//   {
//     id: 3,
//     name: "YouTube Music",
//     icon: <SiYoutubemusic />,
//   },
//   {
//     id: 4,
//     name: "YouTube Kids",
//     icon: <SiYoutubekids />,
//   },
// ];
// const SidebarItem5 = [
//   {
//     id: 1,
//     name: "Settings",
//     icon: <IoSettingsOutline />,
//   },
//   {
//     id: 2,
//     name: "Report History",
//     icon: <FiFlag />,
//   },
//   {
//     id: 3,
//     name: "Help",
//     icon: <IoIosHelpCircleOutline />,
//   },
//   {
//     id: 4,
//     name: "Send feedback",
//     icon: <MdOutlineFeedback />,
//   },
// ];

//   const sidebaritem=[
//     {
//       groupName:"Home ",
//       groupItem:[
//         {
//           id: 1,
//           name: "Home",
//           icon: <GoHomeFill />,
//         },
//         {
//           id: 2,
//           name: "Shorts",
//           icon: <SiYoutubeshorts />,
//         },
//         {
//           id: 3,
//           name: "Subscription",
//           icon: <MdOutlineSubscriptions />,
//         },
//       ],
//     },

//     {
//       groupName:"You ",
//       groupItem:[
//         {
//           id: 1,
//           name: "History",
//           icon: <FaHistory />,
//         },
//         {
//           id: 2,
//           name: "Platlist",
//           icon: <MdOutlinePlaylistPlay />,
//         },
//         {
//           id: 3,
//           name: "Your video",
//           icon: <GoVideo />,
//         },
//         {
//           id: 4,
//           name: "Watch later",
//           icon: <MdOutlineWatchLater />,
//         },
//         {
//           id: 5,
//           name: "Liked video",
//           icon: <GrLike />,
//         },
//       ],
//     },

//     {
//       groupName:"Explore ",
//       groupItem:[
//         {
//           id: 1,
//           name: "Tranding",
//           icon: <SiTrendmicro />,
//         },
//         {
//           id: 2,
//           name: "Shopping",
//           icon: <RiShoppingBag4Line />,
//         },
//         {
//           id: 3,
//           name: "Music",
//           icon: <LuMusic4 />,
//         },
//         {
//           id: 4,
//           name: "Movies",
//           icon: <MdOutlineMovie />,
//         },
//         {
//           id: 5,
//           name: "Live",
//           icon: <CgMediaLive />,
//         },
//         {
//           id: 6,
//           name: "Gaming",
//           icon: <SiYoutubegaming />,
//         },
//         {
//           id: 7,
//           name: "News",
//           icon: <FaRegNewspaper />,
//         },
//         {
//           id: 8,
//           name: "Sports",
//           icon: <TfiCup />,
//         },
//         {
//           id: 9,
//           name: "Courses",
//           icon: <LuBookMarked />,
//         },
//         {
//           id: 10,
//           name: "Fasion&Beauty",
//           icon: <SiStylelint />,
//         },
//         {
//           id: 11,
//           name: "Podcast",
//           icon: <MdPodcasts />,
//         },
//       ],
//     },

//     {
//       groupName:"more for youtube ",
//       groupItem:[
//         {
//           id: 1,
//           name: "YTube Premimum",
//           icon: <FaYoutube />,
//         },
//         {
//           id: 2,
//           name: "YouTube studio",
//           icon: <SiYoutubestudio />,
//         },
//         {
//           id: 3,
//           name: "YouTube Music",
//           icon: <SiYoutubemusic />,
//         },
//         {
//           id: 4,
//           name: "YouTube Kids",
//           icon: <SiYoutubekids />,
//         },
//       ],
//     },

//     {
//       groupName:"Setting ",
//       groupItem:[
//         {
//           id: 1,
//           name: "Settings",
//           icon: <IoSettingsOutline />,
//         },
//         {
//           id: 2,
//           name: "Report History",
//           icon: <FiFlag />,
//         },
//         {
//           id: 3,
//           name: "Help",
//           icon: <IoIosHelpCircleOutline />,
//         },
//         {
//           id: 4,
//           name: "Send feedback",
//           icon: <MdOutlineFeedback />,
//         },
//       ],
//     },
//   ]
//   return (
//     <div className="px-6 w-[25%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden  ">
//       <div className="space-y-3  items-center  ">
//         {SidebarItem1.map((item) => {
//           return (
//             <div key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
//               <div className=" text-xl cursor-pointer">{item.icon}</div>
//               <span className=" cursor-pointer">{item.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       <br></br>
//       <hr></hr>

//       <div className=" mt-4 space-y-2  items-center  ">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl mb-2">
//             <b>You</b>
//           </h1>
//           <FaChevronRight />
//         </div>
//         {SidebarItem2.map((item) => {
//           return (
//             <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
//               <div className=" text-xl cursor-pointer">{item.icon}</div>
//               <span className=" cursor-pointer">{item.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       <br></br>
//       <hr></hr>

//       <div className=" mt-4 space-y-2  items-center  ">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl mb-2">
//             <b>Explor</b>
//           </h1>
//         </div>
//         {SidebarItem3.map((item) => {
//           return (
//             <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
//               <div className=" text-xl cursor-pointer">{item.icon}</div>
//               <span className=" cursor-pointer">{item.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       <br></br>
//       <hr></hr>

//       <div className=" mt-4 space-y-2  items-center  ">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl mb-2">
//             <b>More from YouTube</b>
//           </h1>
//         </div>
//         {SidebarItem4.map((item) => {
//           return (
//             <div  key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
//               <div className=" text-xl cursor-pointer text-red-500">
//                 {item.icon}
//               </div>
//               <span className=" cursor-pointer">{item.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       <br></br>
//       <hr></hr>

//       <div className=" mt-4 space-y-2  items-center  ">
//         {SidebarItem5.map((item) => {
//           return (
//             <div   key={item.id} className=" flex space-x-3 hover:bg-gray-300 duration-200 rounded-full p-1">
//               <div className=" text-xl cursor-pointer">{item.icon}</div>
//               <span className=" cursor-pointer">{item.name}</span>
//             </div>
//           );
//         })}
//       </div>
//       <br></br>
//       <hr></hr>
//       <br />
//       <span className="text-xs font-semibold text-gray-500">
//         About Press Copy rightContact<br></br> usCreators Advertise<br></br>{" "}
//         Developers<br></br>
//         <br />
//         <p>
//           Terms Privacy Policy & Safety <br></br>How YouTube works <br></br>Test
//           new features
//         </p>
//         <br />© 2025 Google LLC
//       </span>
//     </div>
//   );
// }

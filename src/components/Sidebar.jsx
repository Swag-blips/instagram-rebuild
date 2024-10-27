import logo from "/assets/logo.svg";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { PiMessengerLogo } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

const Sidebar = () => {
  return (
    <aside className="flex flex-col border-r border-[#dbdbdb]">
      <div className="ml-6">
        <img src={logo} alt="insta-logo" className="h-18 w-[100px] mt-8" />
        <div className="mt-8 flex flex-col justify-center gap-8">
          <div className="flex items-center gap-2">
            <GoHomeFill className="w-7 h-7" />
            <p>Home</p>
          </div>
          <div className="flex items-center gap-2">
            <IoIosSearch className="w-7 h-7" />
            <p>Search</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineExplore className="w-7 h-7" />
            <p>Explore</p>
          </div>
          <div className="flex items-center gap-2">
            <RiVideoLine className="w-7 h-7" />
            <p>Reels</p>
          </div>
          <div className="flex items-center gap-2">
            <PiMessengerLogo className="w-7 h-7" />
            <p>Messages</p>
          </div>
          <div className="flex items-center gap-2">
            <CiHeart className="w-7 h-7" />
            <p>Notifications</p>
          </div>
          <div className="flex items-center gap-2">
            <CiSquarePlus className="w-7 h-7" />
            <p>Create</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://i.pinimg.com/originals/8b/b3/d7/8bb3d7848791081628806998dd83f3a4.jpg"
              alt="profile"
              className="h-7 w-7 rounded-full object-cover"
            />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

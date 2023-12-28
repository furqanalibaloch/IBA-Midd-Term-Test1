import React from "react";
import MainImg from "../Assets/Images/Image Placeholder.jpg";
import { FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex flex-wrap bg-[#2B2B2B]">
      <div className="w-full md:w-1/2">
        <img src={MainImg} alt="" className="w-full md:w-full" />
      </div>
      <div className="text-white sm:flex flex-col justify-center items-center p-4 w-full md:w-1/2">
        <h1 className="text-[3rem] mb-4 md:block">Create Account</h1>
        <p className="w-4/5">
          Welcome! Enter your details and start creating, collecting, and
          selling NFTs.
        </p>

        <div className="input-container mb-4 rounded-full mt-5 relative">
          <FaRegUser className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none size-9 text-gray-500" />
          <input
            type="text"
            placeholder="User Name"
            className="input-field w-full pl-10 pr-4 py-2 rounded-full text-black"
          />
        </div>

        <div className="input-container mb-4 rounded-full relative">
          <CiMail className="absolute inset-y-0 left-0 pl-4 flex items-center size-10 text-gray-500" />
          <input
            type="text"
            placeholder="Email"
            className="input-field w-full pl-10 pr-4 py-2 rounded-full text-black"
          />
        </div>

        <div className="input-container mb-4 rounded-full relative">
          <RiLockPasswordLine className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none size-10 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="input-field w-full pl-10 pr-4 py-2 rounded-full text-black"
          />
        </div>

        <div className="input-container rounded-full relative">
          <RiLockPasswordLine className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none size-10 text-gray-500" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field w-full pl-10 pr-4 py-2 rounded-full text-black"
          />
        </div>

        <button className="bg-[#A259FF] px-8 py-2 rounded-full mt-4">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Home;


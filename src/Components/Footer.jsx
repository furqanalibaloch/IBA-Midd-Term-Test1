import React from "react";
import discord from "../Assets/Icon/DiscordLogo.png";
import youtube from "../Assets/Icon/YoutubeLogo.png";
import twitter from "../Assets/Icon/TwitterLogo.png";
import instagram from "../Assets/Icon/InstagramLogo.png";
import Storefont from "../Assets/Icon/Storefront.png";

function Footer() {
  return (
    <footer className="bg-[#3B3B3B] py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3">
            <img src={Storefont} alt="" className="w-8 h-8" />
            <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
              NFT Marketplace
            </h1>
          </div>
          <p className="text-[#CCCCCC] mt-4 md:mt-6">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC] mt-4 md:mt-6">Join our community</p>
          <div className="flex mt-2 md:mt-4 gap-2">
            <img src={discord} alt="" className="w-6 h-6" />
            <img src={youtube} alt="" className="w-6 h-6" />
            <img src={twitter} alt="" className="w-6 h-6" />
            <img src={instagram} alt="" className="w-6 h-6" />
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
            Explore
          </h1>
          <ul className="text-[#ccc] mt-4 md:mt-6 space-y-2">
            <li>
              <a
                href="#"
                className="text-base md:text-lg lg:text-xl font-normal"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base md:text-lg lg:text-xl font-normal"
              >
                Rankings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base md:text-lg lg:text-xl font-normal"
              >
                Connect a wallet
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white">
            Join our weekly digest
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#ccc] mt-4 md:mt-6">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div class="mt-4 md:mt-6 relative flex  md:flex-col md:w-80 sm:w-full">
            <input
              type="text"
              placeholder="Enter your email here"
              class="rounded-l-full py-2 px-10 outline-none text-[#2B2B2B] text-sm md:text-base sm:rounded-full flex sm:w-full"
            />
            <button class="bg-[#A259FF] rounded-l-full rounded-r-full px-8  text-white text-base md:text-lg font-semibold absolute right-0 top-0 bottom-0 ml-2 md:-ml-0 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 md:my-12 lg:my-16 xl:my-20" />

      <div className="text-[#CCC] px-4 md:px-8 lg:px-12 xl:px-16">
        <p className="mt-4 md:mt-6 text-[0.75rem] md:text-sm lg:text-base leading-[110%]">
          @ NFT Market Use this template freely
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function Primarybutton({ text, func, icon }) {
  return (
    <button className="bg-teal-700 text-white text-base font-bold rounded-xl py-2 px-4 mx-2 shadow-lg   hover:bg-white hover:text-teal-400 hover:shadow-teal-900 hover:border-2 hover:border-teal-300 active:bg-teal-900 active:text-red-500 " onClick={func}>
     {icon}
      {text}
    </button>
  );
}

export default Primarybutton;
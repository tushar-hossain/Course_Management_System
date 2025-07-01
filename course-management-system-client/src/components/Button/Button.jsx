import React from "react";

const Button = (name) => {
  return (
    <button
      className="group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center"
      style="--spread: 90deg; --shimmer-color: #ffffff; --radius: 100px; --speed: 1.5s; --cut: 0.1em; --bg: radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62, 61, 117),rgba(18, 18, 38));"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-100%] rotate-gradient">
          <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
        </div>
      </div>
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
      <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white">
        {name}
      </span>
    </button>
  );
};

export default Button;

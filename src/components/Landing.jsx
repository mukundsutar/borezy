import React from "react";
import Logo from "../assets/logo.png";
import BgImage from "../assets/bg-image.png";
import Unified from "../assets/unified.png";
import Pricing from "./Pricing";
import GirlPhone from "../assets/girl_phone.png";

export default function Landing() {
  const navbarArray = [
    { label: "Home", link: "" },
    { label: "Features", link: "#features" },
    { label: "Pricing", link: "#pricing" },
    { label: "About Us", link: "" },
  ];

  const featureArray = [
    { label: "Unified Rental Management", image: Unified },
    { label: "Optimized Inventory Control", image: Unified },
    { label: "Process Automation", image: Unified },
    { label: "Real-Time Notifications", image: Unified },
    { label: "Quick Booking", image: Unified },
  ];

  const arr = ["", "", ""];

  return (
    <>
      <div className="flex flex-col">
        {/* navbar */}
        <div className="navbar bg-white px-10">
          <a href="/landing" className="flex flex-1 flex-col items-start">
            <img src={Logo} alt="Logo" width={200} />
            <div>BOOK. RENT. EASY.</div>
          </a>

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {navbarArray.map((item, index) => (
                <li>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>

            <button className="btn bg-[#3470ff] text-white">Sign in</button>
          </div>
        </div>

        {/* image */}
        <div className="flex h-[473px] flex-row items-center justify-center space-x-10 bg-gradient-to-r from-[#E2FAFF] to-[#FFDCFB]">
          <div className="flex flex-col space-y-5">
            <div className="text-5xl font-bold">
              Enhance Your Rental Business
            </div>
            <div>
              Streamline your rental operations, enhance customer satisfaction,
              and boost conversions with our integrated solutions.
            </div>
            <button className="btn w-fit bg-[#3470ff] text-white">
              Enquire Now
            </button>
          </div>

          <img src={GirlPhone} alt="" />
        </div>

        {/* features */}
        <div className="m-4 space-y-8 p-10" id="features">
          <div className="text-5xl">Features</div>

          <div className="flex flex-row space-x-5">
            {featureArray.map((item, index) => (
              <div className="card flex flex-1 flex-col items-center bg-[#deeff9] p-4 shadow-xl">
                <figure className="w-fit rounded-lg bg-white p-4">
                  <img src={Unified} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="card-title">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* pricing */}
        <div className="w-full space-y-14 bg-[#e9f4fa] p-10 px-14" id="pricing">
          <div className="text-5xl">Subscription Packages</div>

          <div className="flex flex-row space-x-10">
            <div className="flex h-96 w-[30%] flex-1 justify-center rounded-3xl border-2 border-black bg-white">
              <div className="h-20 w-[40%] rounded-b-3xl bg-[#0095FE]"></div>
            </div>
            <div className="flex h-96 w-[30%] flex-1 justify-center rounded-3xl border-2 border-black bg-white">
              <div className="h-20 w-[40%] rounded-b-3xl bg-[#fea800]"></div>
            </div>
            <div className="flex h-96 w-[30%] flex-1 justify-center rounded-3xl border-2 border-black bg-white">
              <div className="h-20 w-[40%] rounded-b-3xl bg-[#00c802]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

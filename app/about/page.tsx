import React from "react";
import Image from "next/image";
import rasm from "@/public/brooke-cagle-uWVWQ8gF8PE-unsplash 1.svg";
import rasm1 from "@/public/bench-accounting-C3V88BOoRoM-unsplash 1.svg";
import rasm2 from "@/public/andrew-neel-cckf4TsHAuw-unsplash.svg";
import rasm3 from "@/public/jonathan-francisca-YHbcum51JB0-unsplash.svg";

export default function about() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[64px] w-[618px] mb-[16px] mt-[115px] text-center items-center">
          Become a better business with us.
        </h2>
        <p className="w-[573px] text-[21px] text-center mb-[31px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
          tortor, ultricies ut justo eu.
        </p>
        <button className="border px-[67px] py-[15px] rounded-[150px] bg-indigo-500 mb-[132px]">
          Our Business
        </button>
        <Image src={rasm} alt="rasm" className="w-full" />
        <h2 className="font-bold w-[859px] text-[58px] text-center mt-[160px] mb-[197px]">
          Here is what’s happening in the world of talk business.
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-blue-700 mb-[26px]">MAY 2021</h2>
            <h2 className="font-bold text-black w-[218px]">
              Agile focused business services and more.
            </h2>
          </div>
          <Image src={rasm1} alt="rasm" />
        </div>

        <div className="flex justify-between mt-[68px] mb-[68px]">
          <div>
            <h2 className="text-blue-700 mb-[26px]">JUN 2021</h2>
            <h2 className="font-bold text-black w-[218px]">
              Agile focused business services and more.
            </h2>
          </div>
          <Image src={rasm2} alt="rasm" />
        </div>

        <div className="flex justify-between mb-[38px]">
          <div>
            <h2 className="text-blue-700 mb-[26px]">jul 2021</h2>
            <h2 className="font-bold text-black w-[218px]">
              Agile focused business services and more.
            </h2>
          </div>
          <Image src={rasm3} alt="rasm" />
        </div>
      </div>
      <div className="flex container mx-auto justify-center mb-[134px]">
        <p className="p-[17px] border hover:bg-blue-800">Prev</p>
        <p className="p-[17px] border bg-cyan-600 hover:bg-blue-800">1</p>
        <p className="p-[17px] border hover:bg-blue-800">2</p>
        <p className="p-[17px] border hover:bg-blue-800">3</p>
        <p className="p-[17px] border hover:bg-blue-800">Next</p>
      </div>
    </div>
  );
}

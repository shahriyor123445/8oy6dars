import React from "react";
import Image from "next/image";
import link from "@/public/rasm.svg";
import rasm from "@/public/carlos-muza-hpjSkU2UYSU-unsplash 1.svg";
import rasm1 from "@/public/Mask Group (2).svg";
import rasm2 from "@/public/Mask Group (1).svg";
import rasm3 from "@/public/Mask Group.svg";
import rasm4 from "@/public/“.svg";
import ellips from "@/public/clipboard-data.svg";
import ellips1 from "@/public/file-earmark-medical.svg";
import ellips2 from "@/public/calendar3.svg";

export default function home() {
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
        <Image src={link} alt="mdxms" className="w-full mb-[132px]" />
      </div>
      <div className="w-full">
        <h3 className="text-blue-600 container mx-auto">WHAT WE OFFER</h3>
        <h2 className="container mx-auto font-bold text-[58px] w-[768px] ml-[70px] mb-[91px]">
          Agile focused business services and more.
        </h2>
      </div>
      <div className="container mx-auto flex gap-[40px]">
        <div>
          <Image src={rasm} alt="rasm" width={560} />
          <p className="mt-[28px] mb-[7px] text-black font-bold">
            Lorem ipsum dolor
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="font-bold  text-black underline">Browse</p>
        </div>
        <div>
          <Image src={rasm} alt="rasm" width={560} />
          <p className="mt-[28px] mb-[7px] text-black font-bold">
            Lorem ipsum dolor
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="font-bold  text-black underline">Browse</p>
        </div>
        <div>
          <Image src={rasm} alt="rasm" width={560} />
          <p className="mt-[28px] mb-[7px] text-black font-bold">
            Lorem ipsum dolor
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="font-bold  text-black underline">Browse</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="mt-[150px] text-blue-600 mb-[13px]">OUT CUSTOMERS</h3>
        <h2 className="w-[768px] font-bold text-[58px] mb-[60px]">
          Agile focused business services and more.
        </h2>
        <div className="flex justify-between">
          <Image src={rasm1} alt="rasm" />
          <Image src={rasm3} alt="rasm" />
          <Image src={rasm2} alt="rasm" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-16">
            <Image src={rasm4} alt="rasm" />
            <p className="w-[384px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
          <div className="flex gap-16">
            <Image src={rasm4} alt="rasm" />
            <p className="w-[384px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
          <div className="flex gap-16">
            <Image src={rasm4} alt="rasm" />
            <p className="w-[384px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-blue-700 mt-[120px] mb-[13px]">
          SERVICES
        </h2>
        <h2 className="font-bold w-[630px] text-[58px] text-center mb-[51px]">
          We provide or a huge list of services.
        </h2>
        <div className="container mx-auto flex items-center justify-between mb-[86px]">
          <div>
            <Image
              src={ellips}
              alt="RASM"
              className="border p-[20px] rounded-[50%] bg-slate-300 ml-[220px] mb-[50px]"
            />
            <p className="font-bold text-black text-center">
              Lorem ipsum dolor
            </p>
            <p className="w-[495px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
          <div>
            <Image
              src={ellips}
              alt="RASM"
              className="border p-[20px] rounded-[50%] bg-slate-300 ml-[220px] mb-[50px]"
            />
            <p className="font-bold text-black text-center">
              Lorem ipsum dolor
            </p>
            <p className="w-[495px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
          <div>
            <Image
              src={ellips}
              alt="RASM"
              className="border p-[20px] rounded-[50%] bg-slate-300 ml-[220px] mb-[50px]"
            />
            <p className="font-bold text-black text-center">
              Lorem ipsum dolor
            </p>
            <p className="w-[495px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              donec eu mattis tincidunt viverra eu. Lacus turpis felis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

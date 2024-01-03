"use client";
import Image from "next/image";

import Taxi from "@/public/Taxi.png";

const Firstcircle = () => {
  return (
    <div className="flex-col flex items-center  ">
      <div className="w-[427px] h-[439px] rounded-[439px] bg-[#FFB900] absolute left-[232px] top-[-257px]"></div>
      <div className="w-[427px] h-[439px] rounded-[439px] bg-[#FFB900] absolute bottom-[-166px]  right-[175px]"></div>
      <Image
        className="mt-[293px]"
        src={Taxi}
        width={93}
        height={77}
        alt="taxi"
      />
      <h1 className="uppercase text-[36px] font-Rowdies">taxi care</h1>
      <h2 className="font-Satisfy text-[26px]">Travel Partner</h2>
    </div>
  );
};

export default Firstcircle;

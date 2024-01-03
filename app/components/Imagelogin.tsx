import Image from "next/image";
import Taxi from "@/public/Taxi.png";
const Imagelogin = () => {
  return (
    <div className="flex flex-col items-center mb-[76px] ">
      <Image
        className="mt-[261px]"
        src={Taxi}
        width={93}
        height={73}
        alt="taxi-car "
      />
      <h1 className="uppercase text-[36px] font-Rowdies">taxi care</h1>
    </div>
  );
};

export default Imagelogin;

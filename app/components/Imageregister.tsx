import Image from "next/image";
import Taxi from "@/public/Taxi.png";

const Imageregister = () => {
  return (
    <div className=" max-sm:flex max-sm:flex-col max-sm:items-center flex flex-col items-center mb-[123px]">
      <Image
        className="mt-[104px]  "
        src={Taxi}
        width={93}
        height={77}
        alt="taxi"
      />
      <h1 className="uppercase text-[36px] font-Rowdies">taxi care</h1>
    </div>
  );
};

export default Imageregister;

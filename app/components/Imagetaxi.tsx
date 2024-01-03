import Image from "next/image";
import Taxi from "@/public/Taxi.png";

const Imagetaxi = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <Image src={Taxi} width={93} height={77} alt="taxi" />
      <h1>TAXI CARE</h1>
    </div>
  );
};

export default Imagetaxi;

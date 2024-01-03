import Firstcircle from "./components/Firstcircle";
import Imagetaxi from "./components/Imagetaxi";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-[411px] bg-white h-[823px] overflow-hidden relative ">
      <Navbar />
      <Firstcircle />
    </div>
  );
};

export default page;

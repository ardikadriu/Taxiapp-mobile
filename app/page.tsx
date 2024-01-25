import Firstcircle from "./components/Firstcircle";

import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-[411px]  bg-white h-[823px] overflow-hidden relative max-sm:relative ">
      <Navbar />
      <Firstcircle />
    </div>
  );
};

export default page;

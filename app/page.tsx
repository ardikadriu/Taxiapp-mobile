import Firstcircle from "./components/Firstcircle";

import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-[411px] max-sm:w-full max-sm:h-screen  bg-white h-[800px] overflow-hidden relative max-sm:relative ">
      <Navbar />
      <Firstcircle />
    </div>
  );
};

export default page;

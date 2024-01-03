import Imageregister from "../components/Imageregister";
import Register from "../components/Register";

const page = () => {
  return (
    <div className="w-[411px]  bg-white flex flex-col items-center">
      <Imageregister />
      <Register />
    </div>
  );
};

export default page;

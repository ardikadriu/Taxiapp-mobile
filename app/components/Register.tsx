import Link from "next/link";

const Register = () => {
  return (
    <form className="w-full rounded-t-[30px] bg-[#FFB900] flex flex-col items-center font-Roboto">
      <h1 className="w-[334px] text-left text-[34px] font-bold mt-[41px] mb-[31px]">
        Register
      </h1>
      <label className="w-[334px] text-left">Full Name</label>
      <input
        type="text"
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer mb-[13px]"
      />
      <label className="w-[334px] text-left">Email</label>
      <input
        type="email"
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer mb-[13px]"
      />
      <label className="w-[334px] text-left">Password</label>
      <input
        type="password"
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer mb-[13px]"
      />
      <label className="w-[334px] text-left">Confirm Password</label>
      <input
        type="password"
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer "
      />
      <div className="font-roboto w-[334px] flex justify-between items-end mt-[63px] pb-[16px]">
        <h2 className="font-normal">
          Already Member?{" "}
          <Link href={"Login"}>
            <span className=" font-medium hover:cursor-pointer ">Login</span>
          </Link>
        </h2>
        <button className="bg-black px-6 py-2 text-[19px] font-medium text-white rounded-[10px]">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;

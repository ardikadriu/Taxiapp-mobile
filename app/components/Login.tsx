import Link from "next/link";

const Login = () => {
  return (
    <form className=" flex flex-col items-center w-full bg-[#FFB900] rounded-t-[30px] pb-[16px]">
      <h1 className="w-[334px] text-left ml-[27] font-Roboto font-bold text-[36px] mt-[40px]">
        Login
      </h1>
      <label className="w-[334px] text-left mt-[16px] mb-[5px]">Email</label>
      <input
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer"
        type="email"
        placeholder=""
      />
      <label className="w-[334px] text-left mt-[13px] mb-[5px]">Password</label>
      <input
        className="bg-[#FFB900] border-[1px] w-[334px] h-[34px] rounded-[10px] border-black pl-[10px] outline-none hover:cursor-pointer"
        type="password"
        placeholder=""
      />
      <h2 className="w-[334px] text-right hover:cursor-pointer text-[15px] font-medium mt-[14px] font-Roboto">
        Forgot Password?
      </h2>

      <div className="font-roboto w-[334px] flex justify-between items-end mt-[27px]">
        <h2>
          New Here?{" "}
          <Link href={"Register"}>
            <span className="font-medium hover:cursor-pointer ">Register</span>
          </Link>
        </h2>
        <button className="bg-[black] w-[111px] h-[38px] text-[19px] font-medium text-white rounded-[10px]">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-end relative z-10 mt-2 mr-2  ">
      <div
        onClick={handleNav}
        className="flex  items-center hover:cursor-pointer"
      >
        <AiOutlineMenu size="21" />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] md:hidden  h-screen bg-[#121212] p-10 ease-in duration-500 "
            : "fixed left-[-100%] top-0 p-10 "
        }
      >
        <div
          onClick={handleNav}
          className="flex w-full justify-end hover:cursor-pointer"
        >
          <AiOutlineClose color="white" />{" "}
        </div>

        <div className="flex-col py-4 text-white text-left">
          <ul>
            <Link href={"Login"} className="p-">
              <li onClick={() => setMenuOpen(false)} className="mb-[40px]">
                Login
              </li>
            </Link>
            <Link href={"Register"}>
              <li onClick={() => setMenuOpen(false)} className="mb-[40px]">
                Register
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Imagelogin from "../components/Imagelogin";
import Login from "../components/Login";

export default function Home() {
  return (
    <main className="w-[411px] max-sm:w-full max-sm:h-screen max-sm:relative bg-white max-sm:flex max-sm:flex-col max-sm:items-center flex flex-col items-center ">
      <Imagelogin />
      <Login />
    </main>
  );
}

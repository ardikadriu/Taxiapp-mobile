import Imagelogin from "../components/Imagelogin";
import Login from "../components/Login";

export default function Home() {
  return (
    <main className="w-[411px]  bg-white max-sm:flex max-sm:flex-col max-sm:items-center flex flex-col items-center ">
      <Imagelogin />
      <Login />
    </main>
  );
}

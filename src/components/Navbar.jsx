import { useState } from "react";
import { X, Menu, LogIn } from "lucide-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-12 md:h-16 flex items-center justify-between">
      {/* LOGO */}
      <Link to={"/"} className="flex items-center gap-4">
        <Image src="Logo.png" className="w-10 h-10" w={32} h={32} />
        <span className="text-xl font-bold">ThoughFlow</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* Mobile button */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>
        {/* Mobile menu */}
        <div
          className={` w-full h-screen flex flex-col gap-6 font-medium text-xl items-center justify-center absolute top-16 ${
            open
              ? "-right-0 z-50 bg-[#e6e6ff] calc(100% - h-12) -mt-2"
              : "-right-[100%] "
          } transition-all ease-in-out duration-300`}
        >
          {/* to give links after installing react router dom */}
          <Link to={"/"}>Home</Link>
          <Link href="#">Trending</Link>
          <Link href="#">Most Popular</Link>
          <Link href="#">About</Link>

          <a href="#">
            <button className="py-2 px-4 rounded-3xl bg-green-500 text-white">
              Login <LogIn className="inline" />
            </button>
          </a>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6 xl:gap-8 font-medium">
        <Link href="#">Home</Link>
        <Link href="#">Trending</Link>
        <Link href="#">Most Popular</Link>
        <Link href="#">About</Link>

        <SignedOut>
          <Link to={"/login"}>
            <button className="py-1 px-2 rounded-xl bg-green-500 text-white">
              Login <LogIn className="inline" />
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;

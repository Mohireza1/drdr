"use client";
import { SlMenu } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import LoginModal from "./LoginModal";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isBurger, setIsBurger] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav
        dir="ltr"
        className="
    w-full flex justify-around items-center md:items-center md:justify-between
    gap-9 md:gap-0 px-3 py-3 md:px-8 md:sticky
    shadow-sm shadow-gray-200"
      >
        <button
          className="hidden md:block px-6 py-0.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          ورود
        </button>
        <button
          className="md:hidden p-1.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white
        active:bg-blue-600 active:text-white
        transition-all duration-150"
          onClick={() => setIsLogin(true)}
        >
          <BiUser size={25} />
        </button>

        <div
          dir="rtl"
          className="hidden md:flex h-full gap-10 font-medium *:p-2 *:cursor-pointer *:hover:underline *:underline-offset-10 *:transition-all *:duration-150 "
        >
          <div>خانه</div>
          <div>رزرو نوبت</div>
          <div>درباره ما</div>
          <div>تماس با ما</div>
        </div>

        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={131}
            height={28}
            className="max-w-40 md:w-70"
          />
        </Link>

        <button
          className="flex place-self-center text-gray-700 text-3xl md:hidden"
          onClick={() => setIsBurger(true)}
        >
          <SlMenu size={27} />
        </button>
      </nav>
      <BurgerMenu isOpen={isBurger} setIsOpen={setIsBurger} />
      <LoginModal isOpen={isLogin} setIsOpen={setIsLogin} />
    </>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { GrChat } from "react-icons/gr";
import { LiaTelegramPlane } from "react-icons/lia";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-gray-200/60 backdrop-blur-xs"
        onClick={() => setIsOpen(false)}
      />

      <div
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 w-65 h-screen bg-white shadow-gray-400/70 shadow-lg flex flex-col"
      >
        <div
          dir="ltr"
          className="grid grid-cols-[1fr_4fr] grid-rows-[auto_auto] gap-x-3 gap-y-6 mt-20 mb-10 px-5 items-center"
        >
          <button
            className="justify-self-start text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <CgClose size={25} />
          </button>

          <Image alt="logo" src="/logo.png" width={131} height={28} />

          <button
            className="col-span-2 flex justify-center gap-4 w-full p-2
          border border-blue-600 text-blue-600 rounded-md 
          hover:bg-blue-600 hover:text-white transition-all duration-150"
          >
            ورود/عضویت
            <BiUser size={20} />
          </button>
        </div>

        <div
          className="flex-1 mr-4 flex flex-col overflow-auto text-gray-700
           divide-y divide-gray-200
           **:py-3 *:flex *:items-center"
        >
          <div>خانه</div>
          <div>رزرو نوبت</div>
          <div>درباره ما</div>
          <div>تماس با ما</div>
        </div>

        <button
          className="flex gap-2 justify-center items-center mt-6 mx-3 py-3 px-4 text-sm font-bold border bg-blue-600 text-white rounded-md
          hover:bg-blue-600 hover:text-white transition duration-150
          active:bg-blue-900 active:text-gray-100"
        >
          <GrChat />
          <p>تماس با پشتیبانی</p>
        </button>

        <div className="flex justify-around my-6 text-2xl text-sky-600 transition duration-150">
          <CiInstagram />
          <CiLinkedin />
          <LiaTelegramPlane />
        </div>
      </div>
    </div>
  );
}

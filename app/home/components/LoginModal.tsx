"use client";

import Image from "next/image";
import { CgClose } from "react-icons/cg";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  return isOpen ? (
    <div
      dir="rtl"
      className="fixed h-dvh w-full bg-white z-100 top-0 pt-50 px-4"
    >
      <CgClose
        className="absolute top-6 left-4"
        size={25}
        onClick={() => setIsOpen(false)}
      />
      <Image
        alt="logo"
        src="/logo.png"
        width={131}
        height={28}
        className="m-auto w-45 h-auto mb-10"
      />
      <h2 className="text-2xl font-bold my-2">ورود به سایت</h2>
      <p className="font-medium opacity-80">
        برای ثبت نوبت و استفاده از خدمات وارد شوید
      </p>
      <form dir="auto" className="grid gap-4 my-4 max-w-100">
        <input
          className="p-3 border block w-full text-right rounded-lg focus:outline-none focus:border-blue-500 focus:border-2"
          type="text"
          placeholder="نام کاربری..."
        />
        <input
          className="p-3 border block w-full text-right rounded-lg focus:outline-none focus:border-blue-500 focus:border-2"
          type="password"
          placeholder="رمز عبور..."
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-blue-500 text-white text-lg font-bold cursor-pointer"
        >
          ورود
        </button>
      </form>
    </div>
  ) : null;
}

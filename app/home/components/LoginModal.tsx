"use client";

import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const inputClass =
    "p-3 border block w-full text-right rounded-lg focus:outline-none focus:border-blue-500 focus:border-2";
  const buttonClass =
    "p-3 rounded-lg bg-blue-500 text-white text-lg font-bold cursor-pointer";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed top-0 left-0 w-full h-full z-99 backdrop-blur-xs bg-gray-700/20"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            initial={{ scale: 0.98, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed h-dvh w-full bg-white z-100 top-0 pt-50 px-6 md:absolute md:max-w-200 md:max-h-150 md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:flex flex-col justify-center items-center gap-20 md:py-10 md:shadow-xl md:shadow-gray-400/80"
          >
            <CgClose
              className="absolute top-6 left-4 cursor-pointer"
              size={25}
              onClick={handleClose}
            />

            <Image
              alt="logo"
              src="/logo.png"
              width={131}
              height={28}
              className="mb-20 md:my-0 mx-auto w-40 h-auto"
            />

            <div className="md:w-full md:flex items-center flex-col">
              <h2 className="text-2xl font-bold my-2 md:my-0">ورود به سایت</h2>
              <p className="font-medium opacity-80">
                برای ثبت نوبت و استفاده از خدمات وارد شوید
              </p>

              <form dir="auto" className="grid gap-4 my-4 max-w-100 md:w-full">
                <input
                  className={inputClass}
                  type="text"
                  placeholder="نام کاربری..."
                />
                <input
                  className={inputClass}
                  type="password"
                  placeholder="رمز عبور..."
                />
                <button type="submit" className={buttonClass}>
                  ورود
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

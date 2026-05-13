import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import {
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiTelegramLogoLight,
} from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="bg-slate-800 text-white px-4 py-6 lg:pt-15 font-semibold"
    >
      <div className="w-full lg:flex justify-between items-start lg:px-40">
        <section className="lg:flex flex-col gap-5">
          <Image
            src="/logo.png"
            alt="logo"
            width={160}
            height={160}
            className="w-40 mx-auto lg:mx-0 my-6 lg:my-0"
          />
          <p>
            دارای پاسخگویی ۲۴ ساعته در طول ۷ روز هفته برای شما مشتریان و بیماران
            عزیز
          </p>
          <button className="flex gap-2 items-center p-3 rounded-lg w-full justify-center bg-blue-500 my-4 cursor-pointer hover:bg-blue-600 active:bg-blue-700">
            <BiSupport size={25} />
            <p className="font-bold">تماس با پشتیبانی</p>
          </button>
          <p className="my-6">
            <span className="ml-2">
              <SlLocationPin className="inline" />
            </span>
            تهران، امیرکبیر، کوچه گلها، خیابان خرازی، پلاک ۲، طبقه ۴
          </p>
          <div className="flex justify-around my-4 text-3xl *:cursor-pointer *:hover:-translate-y-1 *:transition-all *:duration-100">
            <PiTelegramLogoLight />
            <PiInstagramLogoLight />
            <PiLinkedinLogoLight />
          </div>
        </section>
        <hr className="lg:hidden opacity-25 w-40 mx-auto my-10" />
        <section>
          <h3 className="text-xl font-bold my-6 lg:mt-0 lg:text-center">
            لینک های مفید
          </h3>
          <div className="grid grid-cols-2 items-center gap-x-7 gap-y-7 lg:gap-y-9 *:hover:underline underline-offset-10 *:font-semibold">
            <Link href="/">ورود و ثبت نام</Link>
            <Link href="/">ورود پزشکان</Link>
            <Link href="/">ثبت نام پزشکان</Link>
            <Link href="/">لیست تخصص‌ها</Link>
            <Link href="/">مشاوره تلفنی</Link>
            <Link href="/">لیست مراکز درمانی</Link>
            <Link href="/">فرصت‌های شغلی</Link>
            <Link href="/">تماس با ما</Link>
            <Link href="/">درباره ما</Link>
            <Link href="/">مجله سلامت</Link>
          </div>
        </section>
      </div>
      <hr className="mt-6 opacity-25 w-40 m-auto" />
      <p dir="ltr" className="opacity-20 text-center mt-6 font-normal">
        Designed by Mohammadreza Heydari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

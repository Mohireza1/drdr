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
      className="bg-slate-800 text-white px-4 py-6 font-semibold"
    >
      <img src="/logo.png" className="w-40 m-auto mb-6" />
      <p>
        دارای پاسخگویی ۲۴ ساعته در طول ۷ روز هفته برای شما مشتریان و بیماران
        عزیز
      </p>
      <button className="flex gap-2 items-center p-3 rounded-lg w-full justify-center bg-blue-500 my-4">
        <BiSupport size={25} />
        <p className="font-bold">تماس با پشتیبانی</p>
      </button>
      <p className="my-6">
        <span className="ml-2">
          <SlLocationPin className="inline" />
        </span>
        تهران، امیرکبیر، کوچه گلها، خیابان خرازی، پلاک ۲، طبقه ۴
      </p>
      <div className="flex justify-around my-4 text-3xl">
        <PiTelegramLogoLight />
        <PiInstagramLogoLight />
        <PiLinkedinLogoLight />
      </div>
      <div></div>
      <h3 className="text-lg font-bold my-6">لینک های مفید</h3>
      <div className="grid grid-cols-2 items-center gap-x-7 gap-y-7">
        <a>ورود و ثبت نام</a>
        <a>ورود پزشکان</a>
        <a>ثبت نام پزشکان</a>
        <a>لیست تخصص‌ها</a>
        <a>مشاوره تلفنی</a>
        <a>لیست مراکز درمانی</a>
        <a>فرصت‌های شغلی</a>
        <a>تماس با ما</a>
        <a>درباره ما</a>
        <a>مجله سلامت</a>
      </div>
      <hr className="mt-6 opacity-25 w-40 m-auto" />
      <p dir="ltr" className="opacity-20 text-center mt-6 font-normal">
        Designed by Mohammadreza Heydari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

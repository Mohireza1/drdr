import { BiUser } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

export const CommentCard = () => {
  return (
    <div
      className={`keen-slider__slide relative px-4 py-7 border border-gray-400 rounded-xl min-w-60 md:min-w-100`}
    >
      <div className="flex items-center gap-4 font-bold">
        <span>
          <div className="inline-block p-2 w-11 bg-sky-100 rounded-full">
            <BiUser color="skyblue" size={27} />
          </div>
        </span>
        <p>تیناالسادات</p>
      </div>
      <p className="text-gray-500 my-4">
        خیلی عالی بود بهترین هستند و لایق بیشتر ازین ها هستید و امید وارم خودشون
        یه کلینیک بزنن که قطعا بهترین میشه 😉♥️
      </p>
      <p>
        مراجعه به <strong>دکتر حسینی</strong>
      </p>
      <p className="absolute top-5 left-5 text-gray-500 text-sm">
        ۲ فروردین ۱۴۰۵
      </p>
      <div className="flex flex-row-reverse items-center gap-2 absolute bottom-6 left-5">
        <p className="text-md font-semibold text-gray-700">2.3</p>
        <FaStar color="orange" size={18} />
      </div>
    </div>
  );
};

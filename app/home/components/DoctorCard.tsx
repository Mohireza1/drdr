import Image from "next/image";
import { FaStar } from "react-icons/fa";

export interface Doctor {
  name: string;
  score: number;
  spec: string;
  time: number;
  image: string;
}

export const DoctorCard = ({ name, spec, time, score, image }: Doctor) => {
  return (
    <div
      dir="rtl"
      className="relative m-2 p-5 border border-gray-400/80 rounded-2xl"
    >
      <Image
        alt="card-logo"
        width={500}
        height={500}
        src={image}
        className="rounded-full w-18 m-auto mb-5"
      />
      <h3 className="text-center text-lg font-semibold my-2">{name}</h3>
      <p className="text-center text-sm text-gray-500">{spec}</p>
      <div className="mt-5 grid grid-rows-2 grid-cols-2 gap-2 items-center justify-center">
        <p className="text-xs text-gray-500">مدت پاسخگویی</p>
        <p className="text-end text-sm text-gray-800 text-md">
          {new Intl.NumberFormat("fa-IR").format(time)} دقیقه
        </p>
        <p className="text-xs text-gray-500">پاسخگویی</p>
        <p className="text-end text-sm text-gray-800 text-md">پاسخگو</p>
      </div>
      <button className="w-full bg-green-600 p-3 mt-5 text-white font-bold rounded-md">
        نوبت بگیرید
      </button>
      <div className="flex flex-row-reverse items-center gap-2 absolute top-4 left-4">
        <p dir="rtl" className="text-md font-semibold text-gray-700">
          {new Intl.NumberFormat("fa-IR").format(score)}
        </p>
        <FaStar color="orange" size={18} />
      </div>
    </div>
  );
};

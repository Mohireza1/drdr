"use client";

import { BiSearch, BiUserCheck } from "react-icons/bi";

import { CiMobile1 } from "react-icons/ci";

import { FaAmbulance, FaClipboard } from "react-icons/fa";

import { GiMedicalDrip } from "react-icons/gi";

import { HiLocationMarker } from "react-icons/hi";

import { IoMedical } from "react-icons/io5";

import { Seperator } from "./home/components/utils";

import { GridButton } from "./home/components/GridButton";

import { CommentCard } from "./home/components/CommentCard";

import { DraggableSpecialties } from "./home/components/DraggableSpecialties";

import Link from "next/link";
import DraggableDoctors from "./home/components/DraggableDoctors";

export default function Page() {
  return (
    <>
      <section dir="rtl" className="mt-5 px-4 space-y-2 text-gray-700">
        <h2 className="text-center font-bold text-blue-500 text-2xl">
          دکتر دکتر؛
        </h2>
        <p className="text-center font-semibold">دریافت خدمات ویژه پژشکی</p>
        <label
          htmlFor=""
          className="block mx-auto my-8 max-w-150 w-full text-sm relative"
        >
          <input
            className="w-full border border-blue-500 rounded-full placeholder:text-blue-500 px-3 py-2 my-2
shadow-md shadow-gray-200/80"
            type="text"
            placeholder="نام دکتر یا بیماری را وارد کنید..."
            dir="rtl"
          />
          <div className="flex items-center absolute top-4 left-2 bg-white text-blue-500 gap-3 font-semibold px-2">
            <button className="flex items-center gap-0.5">
              <HiLocationMarker /> <p>ایران</p>
            </button>
            <button type="submit">
              <BiSearch />
            </button>
          </div>
        </label>
      </section>
      <section
        className="grid gap-2 md:gap-6 px-4 my-4 grid-cols-6
text-xs font-medium md:grid-cols-5 md:mx-50"
      >
        <GridButton colSpan={3} text={"دریافت خدمات پزشکی"}>
          <CiMobile1 size={40} color="green" />
        </GridButton>
        <GridButton colSpan={3} text={"دریافت خدمات پزشکی"}>
          <GiMedicalDrip size={40} color="red" />
        </GridButton>
        <GridButton colSpan={2} text={" خدمات پزشکی"}>
          <IoMedical size={35} color="orange" />
        </GridButton>
        <GridButton colSpan={2} text={"دریافت پزشکی"}>
          <FaAmbulance size={35} color="teal" />
        </GridButton>
        <GridButton colSpan={2} text={"دریافت خدمات"}>
          <FaClipboard size={35} color="pink" />
        </GridButton>
      </section>
      <Seperator />
      <section className="px-4">
        <h2 className="text-right font-semibold text-gray-800/90 md:text-center text-2xl my-3">
          به دنبال چه تخصصی هستید؟
        </h2>
        <p className="text-center">
          به آسانی بهترین متخصصان زمینه‌های پزشکی مختلف را پیدا کنید
        </p>
        <div className="my-10 overflow-hidden mask-[linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] cursor-grab active:cursor-grabbing">
          <DraggableSpecialties />
        </div>
        <div className="flex justify-center">
          <Link
            href={"/"}
            className="text-center text-lg font-bold text-blue-500 hover:underline underline-offset-20"
          >
            مشاهده لیست تخصص‌ها ←
          </Link>
        </div>
      </section>
      <Seperator />
      <section>
        <h2 dir="rtl" className="mx-4 text-green-600 font-bold text-lg">
          دریافت مشاوره متخصصی
        </h2>
        <p dir="rtl" className="mx-4 my-2 font-medium">
          امکان مشاوره ۲۴ ساعته و ارسال فایل رایگان
        </p>
        <DraggableDoctors />
      </section>
      <hr className="w-50 mx-auto my-10" />
      <section dir="rtl" className="p-4 mb-6">
        <h2 dir="rtl" className="my-2 text-sky-600 font-semibold text-lg">
          نظرات کاربران دکتردکتر
        </h2>
        <p dir="rtl" className="mb-4 font-medium">
          <span>
            <BiUserCheck className="inline ml-2" />
          </span>
          بیش از ۷ میلیون کاربر رضایت‌مند
        </p>
        <div className="grid grid-flow-col overflow-auto gap-4">
          <CommentCard /> <CommentCard /> <CommentCard /> <CommentCard />
          <CommentCard />
        </div>
      </section>
    </>
  );
}

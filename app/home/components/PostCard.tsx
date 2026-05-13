import Link from "next/link";
import Image from "next/image";

export default function PostCard() {
  return (
    <Link href="/">
      <div className="border border-gray-300 rounded-2xl max-w-80 cursor-pointer hover:-translate-y-2 transition-all duration-150">
        <Image
          src={"/post-hero.png"}
          width={400}
          height={100}
          alt="post-header"
          className="rounded-t-2xl max-h-53"
        />
        <div className="p-5 relative">
          <p className="text-xs text-left">۴ اردیبهشت ۱۴۰۵</p>
          <h2 className="font-bold mb-4 text-lg">عنوان پست</h2>
          <p className="text-sm text-justify">
            آقای دکتر پویان عالی هستن برای خودم و پدرم داروهای مناسب تجویز کردن
            خوشحالم که میتونم بهشون اطمینان کنم و از تلاش و دقت نظرشون بسیار
            سپاسگزارم
          </p>
          <p className="text-sm w-fit mr-auto mb-2 mt-8 text-blue-500 font-bold hover:underline">
            ادامه مطلب
          </p>
        </div>
      </div>
    </Link>
  );
}

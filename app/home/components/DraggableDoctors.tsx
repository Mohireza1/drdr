import { useEffect, useState, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "../utils/doctors";

const getPageSize = (width: number) => {
  if (width >= 1024) return 4;
  if (width >= 900) return 3;
  if (width >= 624) return 2;
  return 1;
};

const getPageStarts = (pageSize: number) => {
  const totalPages = Math.ceil(doctors.length / pageSize);
  const lastStartIndex = Math.max(0, doctors.length - pageSize);
  return Array.from({ length: totalPages }, (_, i) =>
    Math.min(i * pageSize, lastStartIndex),
  );
};

const getPageIndex = (slideIndex: number, pageStarts: number[]) => {
  return pageStarts.findIndex((start, i) => {
    const nextStart = pageStarts[i + 1] ?? Infinity;
    return slideIndex >= start && slideIndex < nextStart;
  });
};

export default function DraggableDoctors() {
  const [pageSize, setPageSize] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pageStarts = useMemo(() => getPageStarts(pageSize), [pageSize]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    initial: 0,
    drag: true,
    slides: { perView: pageSize, spacing: 10 },
    loop: false,
    created: (s) =>
      setCurrentPageIndex(getPageIndex(s.track.details.rel, pageStarts)),
    slideChanged: (s) =>
      setCurrentPageIndex(getPageIndex(s.track.details.rel, pageStarts)),
  });

  useEffect(() => {
    const updatePageSize = () => setPageSize(getPageSize(window.innerWidth));
    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    const autoplay = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => {
      window.removeEventListener("resize", updatePageSize);
      clearInterval(autoplay);
    };
  }, [instanceRef, pageStarts]);

  useEffect(() => {
    instanceRef.current?.moveToIdx(0);
  }, [pageSize, instanceRef]);

  return (
    <div className="space-y-4">
      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden mask-[linear-gradient(to_right,transparent,white_3%,white_97%,transparent)]"
      >
        {doctors.map((doc) => (
          <div key={doc.name} className="keen-slider__slide">
            <DoctorCard {...doc} />
          </div>
        ))}
      </div>

      <div className="hidden justify-center gap-2 mt-4 md:flex">
        {pageStarts.map((startIndex, pageIndex) => (
          <button
            key={startIndex}
            onClick={() => {
              instanceRef.current?.moveToIdx(startIndex);
              setCurrentPageIndex(pageIndex);
            }}
            className={`h-3 rounded-full transition-all ${
              currentPageIndex === pageIndex
                ? "w-8 bg-blue-600"
                : "w-3 bg-gray-400 hover:bg-gray-500 cursor-pointer"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CommentCard } from "./CommentCard";

const getPageSize = (width: number) => {
  if (width >= 1024) return 4;
  if (width >= 900) return 3;
  if (width >= 624) return 2;
  return 1;
};

const comments = Array.from({ length: 12 });

export default function DraggableComments() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    initial: 0,
    drag: true,
    loop: true,
    slides: { perView: 1, spacing: 10 },
  });

  useEffect(() => {
    const updatePageSize = () => {
      const newPageSize = getPageSize(window.innerWidth);
      const inst = instanceRef.current;
      if (inst) {
        // @ts-ignore
        inst.options.slides.perView = newPageSize;
        inst.update();
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    const autoplay = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => {
      window.removeEventListener("resize", updatePageSize);
      clearInterval(autoplay);
    };
  }, [instanceRef]);

  return (
    <div className="space-y-4">
      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden mask-[linear-gradient(to_right,transparent,white_3%,white_97%,transparent)]"
      >
        {comments.map((_, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <CommentCard />
          </div>
        ))}
      </div>
    </div>
  );
}

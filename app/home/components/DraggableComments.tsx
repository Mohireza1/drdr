"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CommentCard } from "./CommentCard";

const comments = Array.from({ length: 12 });

export default function DraggableComments() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    loop: true,
    slides: { perView: "auto", spacing: 10 },
    created(slider) {
      const autoplay = setInterval(() => {
        slider.next();
      }, 3000);
      slider.on("destroyed", () => {
        clearInterval(autoplay);
      });
    },
  });

  return (
    <div className="space-y-4">
      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden md:mask-[linear-gradient(to_right,transparent,white_3%,white_97%,transparent)]"
      >
        {comments.map((_, idx) => (
          <CommentCard key={idx} />
        ))}
      </div>
    </div>
  );
}

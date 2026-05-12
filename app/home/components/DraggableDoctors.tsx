import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "../utils/doctors";

export default function DraggableDoctors() {
  const totalPages = Math.ceil(doctors.length / 5);
  const getPageIndex = (sliderIndex: number) => Math.floor(sliderIndex / 5);

  // === TODO ===
  // Make perview number change based on the display size (1 phone/4 desktop)

  //   Learn KeenSlider!

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    drag: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    loop: false,
    created(slider) {
      setCurrentSlide(getPageIndex(slider.track.details.rel));
    },
    slideChanged(slider) {
      setCurrentSlide(getPageIndex(slider.track.details.rel));
    },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="space-y-4">
      <div ref={sliderRef} className="keen-slider">
        {doctors.map((doc) => (
          <div key={doc.name} className="keen-slider__slide">
            <DoctorCard
              image={doc.image}
              name={doc.name}
              score={doc.score}
              spec={doc.spec}
              time={doc.time}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageIndex = totalPages - 1 - i;

          return (
            <button
              key={pageIndex}
              onClick={() => {
                instanceRef.current?.moveToIdx(pageIndex * 5);
                setCurrentSlide(pageIndex);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === pageIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

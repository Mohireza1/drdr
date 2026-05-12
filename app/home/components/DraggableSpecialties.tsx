"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { specialities } from "../utils/specialities";
import { GridSpec } from "./GridSpec";

export const DraggableSpecialties = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: {
      perView: "auto",
      spacing: 20,
    },
  });

  // Group specialities into pairs for a 2-row layout
  const specialityGroups = [];
  for (let i = 0; i < specialities.length; i += 2) {
    specialityGroups.push(specialities.slice(i, i + 2));
  }

  return (
    <div ref={sliderRef} dir="rtl" className="keen-slider">
      {specialityGroups.map((group, index) => (
        <div
          className="keen-slider__slide min-w-40 md:min-w-50 rounded-lg"
          key={index}
        >
          <div className="flex flex-col gap-4">
            {group.map((spec, specIndex) => (
              <GridSpec key={specIndex} text={spec.name}>
                {spec.icon}
              </GridSpec>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

import { Carousel } from "@material-tailwind/react";
import React from "react";

export default function OMMCCarousel(props) {
  return (
    <Carousel
      className="rounded-md"
      autoplay={true}
      loop={true}
      autoplayDelay={4000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {props.REPSImages.map((image, i) => (
        <div className="h-full w-full">
          <img
            key={i}
            src={image.src}
            alt={image.caption}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black/50 text-center text-xs sm:text-base">
            <p className="text-white pt-2">{image.caption}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

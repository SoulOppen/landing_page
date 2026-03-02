"use client";

import Slider from "react-slick";
import Image from "next/image";
type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className="px-4 py-12">
      <Slider {...settings} className="w-4/5 mx-auto ">
        {images.map((src, index) => (
          <div key={index} className="relative h-[33vh]">
            <Image
              fill
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-xl object-cover w-100 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}


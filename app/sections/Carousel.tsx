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
    <section className="max-w-3xl mx-auto px-4 py-12 w-1/2">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <Image
              width={300}
              height={240}
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-xl mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}


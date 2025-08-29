"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    { src: `${basePath}/assets/img/hero-carousel/img1.jpg`, alt: "img1", title: "img1", titleClass: "slide-title-services" },
    { src: `${basePath}/assets/img/hero-carousel/img2.jpg`, alt: "img2", title: "img2", titleClass: "slide-title-services" },
    { src: `${basePath}/assets/img/hero-carousel/img3.jpg`, alt: "img3", title: "img3", titleClass: "slide-title-services" },
    { src: `${basePath}/assets/img/hero-carousel/img4.jpg`, alt: "img4", title: "img4", titleClass: "slide-title-services" },
    { src: `${basePath}/assets/img/hero-carousel/img5.jpg`, alt: "img5", title: "img5", titleClass: "slide-title-services" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Cleanup function to avoid memory leaks
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div id="hero-carousel" className="carousel slide carousel-fade">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
            <img src={slide.src} alt={slide.alt} className="img-fluid w-100" />
            <div className="container">
              <h2 className={`${slide.titleClass}`}>{slide.title}</h2>
              <p className="fs-6 fs-md-5">{slide.description}</p>
            </div>

          </div>
        ))}

        {/* Navigation Controls */}
        <Link className="carousel-control-prev" href="#" onClick={goToPrevious}>
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </Link>

        <Link className="carousel-control-next" href="#" onClick={goToNext}>
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </Link>

      </div>
    </section>
  );
};

export default HeroCarousel;
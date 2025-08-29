// HeroCarousel.js (React Component)
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const HeroCarousel = () => {
  // useEffect(() => {
  //   const carousel = document.getElementById("hero-carousel");
  //   const items = carousel.querySelectorAll(".carousel-item");
  //   const prevButton = carousel.querySelector(".carousel-control-prev");
  //   const nextButton = carousel.querySelector(".carousel-control-next");

  //   let currentIndex = 0; // Track the current active item

  //   const updateActiveItem = (newIndex) => {
  //     // Ensure the new index is within bounds
  //     if (newIndex < 0 || newIndex >= items.length) return;

  //     // Remove 'active' class from all items
  //     items.forEach((item) => item.classList.remove("active"));

  //     // Add 'active' class to the new item
  //     items[newIndex].classList.add("active");

  //     // Update the current index
  //     currentIndex = newIndex;
  //   };

  //   // Handle the 'Next' button click
  //   nextButton.addEventListener("click", (event) => {
  //     event.preventDefault(); // Prevent Bootstrap's default behavior
  //     const newIndex = (currentIndex + 1) % items.length; // Circular increment
  //     updateActiveItem(newIndex);
  //   });

  //   // Handle the 'Previous' button click
  //   prevButton.addEventListener("click", (event) => {
  //     event.preventDefault(); // Prevent Bootstrap's default behavior
  //     const newIndex = (currentIndex - 1 + items.length) % items.length; // Circular decrement
  //     updateActiveItem(newIndex);
  //   });
  // }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="false"
        data-bs-interval="5000"
      >
        <div className="carousel-item active">
          <img
            src="/assets/img/hero-carousel/img1.png"
            alt="img1"
          />
          <div className="container">
            <h2>AI Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/assets/img/hero-carousel/sms.jpg"
            alt="Digital Marketing Solutions"
          />
          <div className="container">
            <h2>img2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/assets/img/hero-carousel/hero-carousel-3.jpg"
            alt="B2B & B2C Sales Mastery"
          />
          <div className="container">
            <h2>img3</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>
        </div>

        <div className="carousel-item ">
          <img
            src="/assets/img/hero-carousel/hero-carousel-1.jpg"
            alt="Talent Acquisition Excellence"
          />
          <div className="container">
            <h2>BPO Services</h2>
            <p>
              Our BPO services are designed to deliver exceptional support for your business processes,
              allowing you to focus on your core operations.
            </p>
          </div>
        </div>

        <div className="carousel-item ">
          <img
            src="/assets/img/hero-carousel/hero-carousel-1.jpg"
            alt="Talent Acquisition Excellence"
          />
          <div className="container">
            <h2>Talent Acquisition Excellence</h2>
            <p>
              At Lorem_Ipsum Service, we are dedicated to securing top-tier
              talent that fuels innovation and business growth. As one of the
              fastest-growing talent acquisition platforms, we are the preferred
              recruiting partner for numerous Fortune 500 companies.
            </p>
          </div>
        </div>


        <Link
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </Link>

        <Link
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </Link>

        <ol className="carousel-indicators"></ol>
      </div>
    </section>
  );
};

export default HeroCarousel;

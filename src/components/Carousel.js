"use client"

import { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/assets/plant1.png',
            legend: 'Offer 1'
        },
        {
            image: '/assets/plant2.png',
            legend: 'Offer 2'
        },
        {
            image: '/assets/plant3.png',
            legend: 'Offer 3'
        }
    ];

    const totalSlides = slides.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const timer = setTimeout(goToNextSlide, 3000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div className="hero-section">
            <div className="carousel">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                        <img src={slide.image} alt={`Plant ${index + 1}`} />
                        <p className="legend">{slide.legend}</p>
                    </div>
                ))}
            </div>

            <div className="carousel-controls">
                <button className="prev-slide" onClick={goToPrevSlide}>
                    &lt;
                </button>
                <button className="next-slide" onClick={goToNextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;

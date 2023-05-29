"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/images/plant1.png',
            legend: '20% OFF on your first purchase'
        },
        {
            image: '/images/plant2.png',
            legend: 'Get a pot free if you buy 2 plants'
        },
        {
            image: '/images/plant3.png',
            legend: 'Special offer on Cactus plants'
        }
    ];

    const totalSlides = slides.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
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
                        <Image src={slide.image} alt={`Plant ${index + 1}`} width={300} height={300} />
                        <h2 className="legend">{slide.legend}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

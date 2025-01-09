import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Attractions.css";

function Attractions() {
    const [attractionsData, setAttractionsData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/attractions.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch attractions data");
                }
                return response.json();
            })
            .then((data) => setAttractionsData(data))
            .catch((error) =>
                console.error("Error fetching attractions data:", error)
            );
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="attractions-container">
            {/* Video Background Section */}
            <div className="attractions-video-background">
                <video
                    className="attractions-background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={`${process.env.PUBLIC_URL}/attractions.mp4`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="attractions-title-container">
                    <h1>Discover the Heart of Penang: Top Attractions & Unforgettable Experiences</h1>
                </div>
            </div>

            {/* Attractions Cards Section */}
            <div className="attractions-list">
                {attractionsData.map((attractions, index) => (
                    <div className="attractions-card" key={index}>
                        {/* Image Slider */}
                        {attractions.image && attractions.image.length > 0 ? (
                            <Slider
                                {...sliderSettings}
                                className="attractions-slider"
                            >
                                {attractions.image.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`${attractions.name} ${
                                                imgIndex + 1
                                            }`}
                                            className="attractions-slider-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No images available.</p>
                        )}
                        {/* Attraction Details */}
                        <h2>{attractions.name}</h2>
                        <p>{attractions.description}</p>
                        <p>
                            <strong>📍</strong> {attractions.location}
                        </p>
                        <a
                            href={attractions.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="attractions-link"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Attractions;

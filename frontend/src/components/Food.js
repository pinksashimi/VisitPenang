import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Food.css";

function Food() {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/food.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch food data");
                }
                return response.json();
            })
            .then((data) => setFoodData(data))
            .catch((error) => console.error("Error fetching food data:", error));
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
        <div className="food-container">
            <div className="food-video-background">
                <video
                    className="food-background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={`${process.env.PUBLIC_URL}/food.mp4`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="food-title-container">
                    <h1>A Taste of Penang: Street Food & Beyond</h1>
                </div>
            </div>


            <div className="food-list">
                {foodData.map((food, index) => (
                    <div className="food-card" key={index}>
                        {food.image && food.image.length > 0 ? (
                            <Slider {...sliderSettings} className="food-slider">
                                {food.image.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`${food.name} ${
                                                imgIndex + 1
                                            }`}
                                            className="food-slider-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No images available.</p>
                        )}
                        <h2>{food.name}</h2>
                        <p>{food.description}</p>
                        <p>
                            <strong>📍</strong> {food.location}
                        </p>
                        <a
                            href={food.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="food-link"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;
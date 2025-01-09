import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./Hotels.css";

function Hotels() {
    const [hotelsData, setHotelsData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/hotels.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch hotels data");
                }
                return response.json();
            })
            .then((data) => setHotelsData(data))
            .catch((error) => console.error("Error fetching hotels data:", error));
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
        <div className="hotels-container">
            <div className="hotels-video-background">
                <video
                    className="food-background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={`${process.env.PUBLIC_URL}/hotels.mp4`} type="video/mp4"/>
                </video>
                <div className="hotels-title-container">
                    <h1>Find Your Perfect Stay: Penang’s Hotels, Villas & Unique Lodgings</h1>
                </div>
            </div>
            <div className="hotels-list">
                {hotelsData.map((hotels, index) => (
                    <div className="hotels-card" key={index}>
                        {hotels.image && hotels.image.length > 0 ? (
                            <Slider {...sliderSettings} className="hotels-slider">
                                {hotels.image.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`${hotels.name} ${imgIndex + 1}`}
                                            className="hotels-slider-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No images available.</p>
                        )}
                        <h2>{hotels.name}</h2>
                        <p>{hotels.description}</p>
                        <p>
                            <strong>📍</strong> {hotels.location}
                        </p>
                        <a
                            href={hotels.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hotels-link"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
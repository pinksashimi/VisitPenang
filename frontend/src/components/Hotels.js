import React from "react";
import "./Hotels.css";

function Hotels() {
    const hotelsData = [
            {
                "id": 1,
                "name": "Flamingo Hotel by The Beach",
                "description": "Experience stylish beachfront living with flat-screen TVs and private balconies with ocean and island views at The Flamingo.",
                "location": "Jalan Tanjung Bungah, 11200 George Town, Malaysia.",
                "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/4724755.jpg?k=26c10238214638ff5062891eb90f54285f45078135238311ae81213cb219e675&o=&hp=1",
                "website": "https://penang.flamingo.com.my"
            },
            {
                "id": 2,
                "name": "The Granite Luxury Hotel Penang",
                "description": "The Granite Luxury Hotel is simply the perfect one-stop centre for romantic escapes, family vacations, work assignments and business meetings.",
                "location": "191 Jalan Magazine, 10300 George Town, Malaysia",
                "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403024602.jpg?k=69af090016775312ef37675e766342b0e1468e51cea4a829c0b8d72b1d86cd58&o=&hp=1",
                "website": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.thegranitehotel.com/&ved=2ahUKEwjXpYaK7dmKAxXpyzgGHT8bJ54QFnoECDwQAQ&usg=AOvVaw3WMtEY0ByAdLJPGa5_CAd9"
            },
            {
                "id": 3,
                "name": "Noordin Mews Hotel",
                "description": "Nestled in the heart of Penang’s heritage centre, Noordin Mews is an intimate 1920s Peranakan shophouse turned hotel.",
                "location": "53 Noordin Street, 10300 Georgetown, Penang, Malaysia",
                "image": "https://www.noordinmews.com/wp-content/uploads/2017/05/1.0-Home.jpg",
                "website": "https://www.noordinmews.com"
            }
    ];

    return (
        <div className="hotels-container">
            <div className="hotels-video-background">
                <video autoPlay loop muted playsInline className="hotels-background-video">
                    <source src="https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stbWVkaWEiLCAiayI6ICJ2aWRlby8xMTA1NTYwODY1L3ByZXZpZXcubXA0IiwgImUiOiAxNzM2MDM0NjczLCAibSI6IDF9LCAiYUVxandrdDB3V1d3VFE5WFN5SEZ3VXhpcEtJIl0=/1105560865-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hotels-title-container">
                    <h1>Discover Your Perfect Retreat in Penang</h1>
                </div>
            </div>
            <div className="hotels-list">
                {hotelsData.map((hotel, index) => (
                    <div className="hotel-card" key={index}>
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <h2>{hotel.name}</h2>
                        <p>{hotel.description}</p>
                        <p><strong>Location:</strong> {hotel.location}</p>
                        <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="hotel-link">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
import React from "react";
import "./Food.css";

function Food() {
    const foodData = [
            {
                "id": 1,
                "name": "Lorong Selamat Char Koay Teow",
                "description": "A flavorful stir-fried noodle dish.",
                "location": "108, Lorong Selamat 10400 George Town, Penang",
                "image": "https://thesmartlocal.my/wp-content/uploads/2024/09/image6-1536x1098.jpg",
                "website": "https://www.taufulou.com/famous-lorong-selamat-char-koay-teow-at-penang/"
            },
            {
                "id": 2,
                "name": "Deens Maju Nasi Kandar",
                "description": "A traditional Malaysian dish of steamed rice served with a variety of curries and side dishes.",
                "location": "170 Jalan Gurdwara, George Town, Penang Island 10300 Malaysia",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZnZC2Ds2G2PBlEFP5F9ACEd58Ak0r3EHKw&s",
                "website": "https://www.tripadvisor.com.my/Restaurant_Review-g298303-d5873013-Reviews-Deens_Maju-George_Town_Penang_Island_Penang.html"
            },
            {
                "id": 3,
                "name": "Penang Road Famous TeoChew Chendul",
                "description": "A traditional dessert features a refreshing combination of shaved ice, coconut milk, palm sugar syrup, and green pandan jelly noodles.",
                "location": "27 & 29 Lebuh Keng Kwee, Penang Island 10100 Malaysia",
                "image": "https://i.ytimg.com/vi/wd6CoZpmb2c/maxresdefault.jpg",
                "website": "https://chendul.my"
            }
    ];

    return (
        <div className="food-container">
            <div className="food-video-background">
                <video autoPlay loop muted playsInline className="food-background-video">
                    <source src="https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stbWVkaWEiLCAiayI6ICJ2aWRlby8xMDQ0NTM0NDg0L3ByZXZpZXcubXA0IiwgImUiOiAxNzM2MDMzODcxLCAibSI6IDF9LCAidm00eTdtNFpmREl1MmMyVkJTR1Z0RHpScTNNIl0=/1044534484-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="food-title-container">
                    <h1>A Taste of Penang: Street Food & Beyond</h1>
                </div>
            </div>
            <div className="food-list">
                {foodData.map((food, index) => (
                    <div className="food-card" key={index}>
                        <img src={food.image} alt={food.name} className="food-image" />
                        <h2>{food.name}</h2>
                        <p>{food.description}</p>
                        <p><strong>Location:</strong> {food.location}</p>
                        <a href={food.website} target="_blank" rel="noopener noreferrer" className="food-link">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;
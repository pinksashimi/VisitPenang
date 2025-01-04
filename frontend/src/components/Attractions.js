import React from "react";
import "./Attractions.css";

function Attractions() {
    const attractionsData = [
            {
                "id": 1,
                "name": "Penang Hill",
                "description": "A scenic hilltop retreat offering panoramic views of George Town and beyond.",
                "location": "Penang Hill, Air Itam, Penang",
                "image": "https://onpenang.com/wp-content/uploads/2024/07/Peanng-Hill-view-scaled.jpg",
                "website": "https://www.penanghill.gov.my/index.php/en/"
            },
            {
                "id": 2,
                "name": "Penang National Park",
                "description": "The Penang National Park is one of the world’s smallest forest reserves and is also home to the only meromictic lake in Malaysia.",
                "location": "Jalan Hassan Abas, 11050 George Town, Penang",
                "image": "https://www.mypenang.gov.my/uploads/page/16/images/Penang_NatureAdventure_NationalPark.jpg",
                "website": "https://www.wildlife.gov.my/index.php/en/11-info/154-penang-national-park"
            },
            {
                "id": 3,
                "name": "Escape Theme Park",
                "description": "For the thrill seekers out there, ESCAPE is the place to go.ESCAPE tries to solve real world problems and is not like your average theme park. So, escape the real world and play like a kid again!",
                "location": "828 Jalan Teluk Bahang 11050, Penang",
                "image": "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/324/2018/07/30014751/ESCAPE_DLoh-3994.jpg",
                "website": "https://www.escape.my/pg"
            }
    ];

    return (
        <div className="attractions-container">
            <div className="attractions-video-background">
                <video autoPlay loop muted playsInline className="attractions-background-video">
                    <source src="https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stbWVkaWEiLCAiayI6ICJ2aWRlby8zNDQ2MTQwMDIzL3ByZXZpZXcubXA0IiwgImUiOiAxNzM2MDM0Mjc1LCAibSI6IDF9LCAiNElPd2tvK0pZbkNWazlLUDdoYzV3QzVYdE9vIl0=/3446140023-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="attractions-title-container">
                    <h1>The Ultimate Penang Experience</h1>
                </div>
            </div>
            <div className="attractions-list">
                {attractionsData.map((attraction, index) => (
                    <div className="attraction-card" key={index}>
                        <img src={attraction.image} alt={attraction.name} className="attraction-image" />
                        <h2>{attraction.name}</h2>
                        <p>{attraction.description}</p>
                        <p><strong>Location:</strong> {attraction.location}</p>
                        <a href={attraction.website} target="_blank" rel="noopener noreferrer" className="attraction-link">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Attractions;
// ArtisanCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ArtisanCard = ({ artisan }) => {
    return (
        <Card style={{ width: "18rem", marginTop: "20px" }}>
            <Card.Img variant="top" src={artisan.image} style={{ maxHeight: "200px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{artisan.name}</Card.Title>
                <Card.Text>{artisan.bio}</Card.Text>
                {/* Additional artisan details here */}
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
    );
};

export default ArtisanCard;

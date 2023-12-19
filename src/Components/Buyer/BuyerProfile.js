import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaUserCircle, FaEnvelope, FaHome, FaPhone, FaCreditCard, FaEdit } from 'react-icons/fa';
import "../../Profile.css";


function BuyerProfile() {
    const url = "http://localhost:6006/api/buyer";
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userUpdate, setUserUpdate] = useState({});

    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good morning";
      if (hour < 18) return "Good afternoon";
      return "Good evening";
  };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.id);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            const headers = { 'Authorization': `Bearer ${localStorage.getItem("token")}` };
            axios.get(`${url}/${userId}`, { headers })
                .then((res) => {
                    const fetchedUser = res.data.buyer[0];
                    setUser(fetchedUser);
                    setUserUpdate(fetchedUser);

                })
                .catch((error) => {
                    console.error(error.response.data.msg);
                });
        }
    }, [userId]);

    const handleChange = (e) => {
        setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${url}/${user.id}`, userUpdate);
        } catch (error) {
            console.error(error);
        }
        handleClose();
        window.location.reload();
    };

    return (
        <>  
            <div className="profile-container">
                <h3 className="welcome-back">Welcome Back</h3>
                <Card className="profile-card">
                    {user.image && <Card.Img variant="top" src={user.image} />}
                    <Card.Body>
                        <div className="user-detail">
                            <h6>Name:</h6>
                            <Card.Text>{user.name}</Card.Text>
                        </div>
                        <div className="user-detail">
                            <h6>Email:</h6>
                            <Card.Text>{user.email}</Card.Text>
                        </div>
                        <div className="user-detail">
                            <h6>Address:</h6>
                            <Card.Text>{user.address}</Card.Text>
                        </div>
                        <div className="user-detail">
                            <h6>Phone Number:</h6>
                            <Card.Text>{user.phonenumber}</Card.Text>
                        </div>
                        <div className="user-detail">
                            <h6>Credit Card:</h6>
                            <Card.Text>{user.creditcardnumber}</Card.Text>
                        </div>
                        <div className="update-button">
                            <Button variant="success" onClick={handleShow}>Update</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        {/* Repeat the form group for each field you want to make editable */}
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.name}
                                onChange={handleChange}
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> email </Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.email}
                                onChange={handleChange}
                                name="email"
                            />
                        </Form.Group>
                        {/* ... other form groups for email, address, etc. ... */}
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.phonenumber}
                                onChange={handleChange}
                                name="phonenumber"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.creditcardnumber}
                                onChange={handleChange}
                                name="creditcardnumber"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>password </Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BuyerProfile;

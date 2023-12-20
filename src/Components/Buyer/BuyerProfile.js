import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaUserCircle, FaEnvelope, FaHome, FaPhone, FaCreditCard, FaEdit } from 'react-icons/fa';
import "../../Profile.css";
import OrderHistory from './OrderHistory';


function BuyerProfile() {
    const url = "http://localhost:6006/api/buyer";
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userUpdate, setUserUpdate] = useState({});

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);


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

    useEffect(() => {
        if (deleteSuccess) {
            // Logic to handle what happens after a user is successfully deleted
            // For example, you can wait for a few seconds and then redirect or change the view
            const timer = setTimeout(() => {
                // Here you can redirect to another page or change the state to show a blank page
                setShowDeletedMessage(true);
            }, 2000); // Wait for 2 seconds before showing the success message

            return () => clearTimeout(timer);
        }
    }, [deleteSuccess]);

    const [showDeletedMessage, setShowDeletedMessage] = useState(false);



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
    
    
    const handleDelete = () => {
        setShowConfirmDialog(true);
    };
    
    const handleDeleteConfirmed = async () => {
        setShowConfirmDialog(false); // Close the confirmation dialog
        try {
            const headers = { 'Authorization': `Bearer ${localStorage.getItem("token")}` };
            const response = await axios.delete(`${url}/${userId}`, { headers });
    
            if (response.status === 200) {
                // Set deleteSuccess to true to trigger the useEffect hook
                setDeleteSuccess(true);
            }
        } catch (error) {
            console.error("Error deleting user:", error.response?.data?.msg || error.message);
        }
    };
    const successMessageStyle = {
        fontSize: '24px', // Large font size
        color: 'green', // Color for the message
        textAlign: 'center', // Center the text
        marginTop: '50px' // Add some space from the top
    };
    
    return (
        <>
             {showDeletedMessage ? (
                // Apply styles to make the message larger and more noticeable
                <div style={successMessageStyle}>User deleted successfully</div>
            ): (
                <div className="profile-container">
                    
                    <h3 className="welcome-back">{`${getGreeting()}, ${user?.name}`}</h3>
                    <Card className="profile-card">
                        {user?.image && <Card.Img variant="top" src={user.image} />}
                        <Card.Body>
                            <div className="user-detail">
                                <h6>Name:</h6>
                                <Card.Text>{user?.name}</Card.Text>
                            </div>
                            <div className="user-detail">
                                <h6>Email:</h6>
                                <Card.Text>{user?.email}</Card.Text>
                            </div>
                            <div className="user-detail">
                                <h6>Address:</h6>
                                <Card.Text>{user?.address}</Card.Text>
                            </div>
                            <div className="user-detail">
                                <h6>Phone Number:</h6>
                                <Card.Text>{user?.phonenumber}</Card.Text>
                            </div>
                            <div className="user-detail">
                                <h6>Credit Card:</h6>
                                <Card.Text>{user?.creditcardnumber}</Card.Text>
                            </div>
                            <div className="update-button">
                                <Button variant="success" onClick={handleShow}>Update</Button>
                                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                    

            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
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
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={user?.email}
                                onChange={handleChange}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user?.address}
                                onChange={handleChange}
                                name="address"
                            />
                        </Form.Group>
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
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
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

            <Modal show={showConfirmDialog} onHide={() => setShowConfirmDialog(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmDialog(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirmed}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
   
}

export default BuyerProfile;

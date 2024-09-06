import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const ComplaintAnalytics = () => {
    const [data, setData] = useState({ total: 0, solved: 0, unsolved: 0 });

    useEffect(() => {
        axios.get("https://your-api-endpoint.com/complaints")
            .then(response => {
                const { total, solved, unsolved } = response.data;
                setData({ total, solved, unsolved });
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <Row className="mb-4 justify-content-center">
            <Col>
                <Card className="card" style={{ backgroundColor: 'white', color: 'black' }}>
                    <Card.Body className="text-center">
                        <Card.Title className="card-title">Total</Card.Title>
                        <i className="bi bi-bar-chart-fill card-icon"></i> {/* Icon for Total */}
                        <Card.Text className="card-text">{data.total}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card" style={{ backgroundColor: 'white', color: 'black' }}>
                    <Card.Body className="text-center">
                        <Card.Title className="card-title">Solved</Card.Title>
                        <i className="bi bi-check-circle-fill card-icon"></i> {/* Icon for Solved */}
                        <Card.Text className="card-text">{data.solved}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card" style={{ backgroundColor: 'white', color: 'black' }}>
                    <Card.Body className="text-center">
                        <Card.Title className="card-title">Unsolved</Card.Title>
                        <i className="bi bi-exclamation-circle-fill card-icon"></i> {/* Icon for Unsolved */}
                        <Card.Text className="card-text">{data.unsolved}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ComplaintAnalytics;

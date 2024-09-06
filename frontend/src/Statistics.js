import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Header from "./Header";
import StatisticsTable from "./StatisticsTable";
import ComplaintAnalytics from './ComplaintAnalytics';

function Statistics() {
    const [activeTab, setActiveTab] = useState("statistics");

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={10}>
                    <header>
                        <Header />
                    </header>
                    <div  style={{paddingBottom:'150px'}}>

                    </div>
                    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)} >
                        <Nav variant="tabs" className="justify-content-center mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="statistics">Statistics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="analytics">Complaint Analytics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="statistics">
                                <StatisticsTable />
                            </Tab.Pane>
                            <Tab.Pane eventKey="analytics">
                                < ComplaintAnalytics />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Statistics;
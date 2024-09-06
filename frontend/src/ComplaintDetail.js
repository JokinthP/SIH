import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';

function ComplaintDetail({ complaint, onClose }) {
    if (!complaint) return null; 

    return (
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '80%', backgroundColor: 'lightgrey', position: 'relative' , paddingTop: '15px' }}>
                <Card.Body>
                <Button 
                variant="secondary" 
                className="btn-close" 
                style={{ position: 'absolute', top: '3px', right: '3px', zIndex: '1'}} 
                onClick={onClose} 
                />
                    <div class="card bg-success text-white" style={{paddingTop: '10px'}}>
                        <Card.Title className="text-center">Complaint Details</Card.Title>
                    </div>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td><strong>PNR:</strong></td>
                                <td>{complaint.pnr}</td>
                            </tr>
                            <tr>
                                <td><strong>Customer's Complaint:</strong></td>
                                <td>{complaint.customer_complaint}</td>
                            </tr>
                            <tr>
                                <td><strong>Category:</strong></td>
                                <td>{complaint.category}</td>
                            </tr>
                            <tr>
                                <td><strong>Sub-Category:</strong></td>
                                <td>{complaint.sub_category}</td>
                            </tr>
                            <tr>
                                <td><strong>Priority:</strong></td>
                                <td>{complaint.priority}</td>
                            </tr>
                            <tr>
                                <td><strong>Status:</strong></td>
                                <td>{complaint.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ComplaintDetail;

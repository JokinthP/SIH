import React, { useState, useEffect } from "react";
import complaintsData from './Complaints.json';
import ComplaintDetail from './ComplaintDetail';
import MediaPopup from './MediaPopup'; 

function StatisticsTable() {
    const [data, setData] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);

    useEffect(() => {
        setData(complaintsData);
    }, []);

    const handleRowClick = (complaint) => {
        setSelectedComplaint(complaint);
    };

    const handleCloseDetail = () => {
        setSelectedComplaint(null); // Close the detail view
    };

    const handleShowMedia = (image) => {
        setSelectedMedia(image);
    };

    const handleCloseMedia = () => {
        setSelectedMedia(null);
    };

    const renderComplaintText = (text) => {
        return text.length > 20 ? text.substring(0, 20) + '...' : text;
    };

    return (
        <>
            <div className="table-responsive-sm" style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '100px', maxWidth: '100%' }}>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-success">
                            <th>SL NO</th>
                            <th>PNR</th>
                            <th>Customer's Complaint</th>
                            <th>Category</th>
                            <th>Sub-Category</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Media</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((complaint, index) => (
                            <tr key={index} onClick={() => handleRowClick(complaint)} style={{ cursor: 'pointer' }}>
                                <td>{complaint.sl_no}</td>
                                <td>{complaint.pnr}</td>
                                <td>{renderComplaintText(complaint.customer_complaint)}</td>
                                <td>{complaint.category}</td>
                                <td>{complaint.sub_category}</td>
                                <td>{complaint.priority}</td>
                                <td>{complaint.status}</td>
                                <td>
                                    <button onClick={(e) => { e.stopPropagation(); handleShowMedia(complaint.image); }} className="btn btn-link">
                                        Show Media
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedComplaint && (
                <ComplaintDetail complaint={selectedComplaint} onClose={handleCloseDetail} />
            )}

            {selectedMedia && (
                <MediaPopup selectedMedia={selectedMedia} handleCloseMedia={handleCloseMedia} />
            )}
        </>
    );
}

export default StatisticsTable;

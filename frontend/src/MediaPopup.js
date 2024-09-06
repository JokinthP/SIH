import React from 'react';

function MediaPopup({ selectedMedia, handleCloseMedia }) {
    return (
        <div className="media-popup" style={{ position: 'fixed', top: '20%', left: '30%', width: '40%', backgroundColor: 'white', padding: '20px', border: '1px solid black', zIndex: 1000 }}>
            <button onClick={handleCloseMedia} style={{ float: 'right', marginBottom: '10px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px' }}>
                &times;
            </button>
            <img src={selectedMedia} alt="Media" style={{ width: '100%' }} />
        </div>
    );
}

export default MediaPopup;

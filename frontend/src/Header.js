import React from 'react';
import RM_Emblem from './Assets/RM_Emblem.png';
import RM_railMadad from './Assets/RM_railMadad.jpg';
import RM_G2 from './Assets/RM_G2.jpg';

function Header() {
    const handleLoginClick = () => {
        window.location.href = '/Adminlogin'; 
    };

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-success fixed-top" style={{ padding: '15px' }}>
                <div className="container-fluid d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
                        <img src={RM_Emblem} alt="RM_Emblem" style={{ width: '100px', marginRight: '10px' }} className="rounded-pill" />
                        <img src={RM_railMadad} alt="Rail Madad" style={{ width: '100px', marginRight: '10px' }} className="rounded-pill" />
                        <img src={RM_G2} alt="G2" style={{ width: '100px' }} className="rounded-pill" />
                    </div>

                    {/* Admin Login Button */}
                    <div>
                        <button 
                            className="btn btn-light" 
                            onClick={handleLoginClick}
                            style={{ 
                                fontFamily: 'Arial, sans-serif',  // Change the font
                                fontSize: '18px',                // Change the font size
                                fontWeight: 'bold'               // Make it bold
                            }}>
                            Admin Login
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

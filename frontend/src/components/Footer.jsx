import React from 'react';
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3>CONTACT US</h3>
                        <p>
                            <strong>Phone:</strong> +977 9800000000
                        </p>
                        <p>
                            <strong>Email:</strong> info@diabetesprediction.com
                        </p>
                        <p>
                            <strong>Address:</strong> Bhaktapur- Nepal
                        </p>
                    </div>
                    <div className="copyright">
                        <p><strong>  <marquee>&copy; 2024 Diabetes Prediction System. All rights reserved.</marquee></strong></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

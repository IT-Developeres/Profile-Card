import './card.css';
import React from 'react';
import Cardimg from './photo-1480455624313-e29b44bbfde1.avif';

function Card() {
    return(
        <>
        <div className="card-container">
            <div className="card-main">
                <div className="card-background"></div>
                <div className="card-content">
                    <div className="card-image">
                        <div className="image-border"></div>
                        <img src={Cardimg} alt="Emily Roffle" />
                    </div>
                    <div className="card-name">
                        <h3>
                            Emily Roffle
                        </h3>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="card-description">
                        <h3>
                            About Me
                        </h3>
                        <p>
                            A sleek, concise profile card that highlights key information at a glance. Perfect for showcasing a person's name, role, and contact details in a clean, modern design.
                        </p>
                    </div>
                    <div className="card-buttons">
                         <button>HTML</button>
                        <button>CSS 3</button>
                        <button>React JS</button>
                        <button>Node JS</button>
                    </div>
                    <div className="card-socials">
                        <a href='https://www.facebook.com/'  className="social-icon"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href='https://www.instagram.com/' className="social-icon"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href='https://www.linkedin.com/' className="social-icon"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="https://github.com/" className="social-icon"><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;
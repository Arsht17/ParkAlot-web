import React from "react";
import "../styles/footer.css";
import logo from "../assets/icons/Vector.svg";
import locationIcon from "../assets/icons/mynaui_location.svg";
import socialX from "../assets/images/X.png";
import socialXBlue from "../assets/images/X_blue.png.png";
import socialFb from "../assets/images/Facebook F.png";
import socialFbBlue from "../assets/images/F_blue.png.png";
import socialIg from "../assets/images/Instagram.png";
import socialIgBlue from "../assets/images/I_blue.png";

export default function Footer() {
  return (
    <footer className="footer" id="contact" dir="ltr">
      <div className="footer__top">
        <div className="footer__categories">
          <div className="footer__column">
            <div className="footer__title">תמיכה</div>
            <div className="footer__items">
              <a className="footer__link" href="#contact">
                צור קשר
              </a>
              <div className="footer__location">
                <span>תל אביב, ישראל</span>
                <img src={locationIcon} alt="" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">החברה</div>
            <div className="footer__items">
              <a className="footer__link" href="#about">
                אודות
              </a>
              <a className="footer__link" href="#privacy">
                מדיניות פרטיות
              </a>
              <a className="footer__link" href="#terms">
                תנאי שירות
              </a>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">המוצר</div>
            <div className="footer__items">
              <a className="footer__link" href="#download">
                הורדה
              </a>
              <a className="footer__link" href="#business">
                לעסקים
              </a>
            </div>
          </div>
        </div>

        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="footer__brand-text">PARKO</span>
            <img className="footer__brand-icon" src={logo} alt="PARKO logo" />
          </div>
          <p>הופכים חניה לפשוטה, מהירה וללא לחץ לנהגים בכל מקום.</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__socials">
          <div className="footer__socials-title">לעדכונים</div>
          <div className="footer__socials-icons">
            <a href="#x" aria-label="X">
              <img
                className="footer__icon default"
                src={socialX}
                alt=""
                aria-hidden="true"
              />
              <img
                className="footer__icon hover"
                src={socialXBlue}
                alt=""
                aria-hidden="true"
              />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img
                className="footer__icon default"
                src={socialFb}
                alt=""
                aria-hidden="true"
              />
              <img
                className="footer__icon hover"
                src={socialFbBlue}
                alt=""
                aria-hidden="true"
              />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img
                className="footer__icon default"
                src={socialIg}
                alt=""
                aria-hidden="true"
              />
              <img
                className="footer__icon hover"
                src={socialIgBlue}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <p className="footer__copyright">
          <span>© 2025 </span>
          <span className="footer__brand-accent">PARKO</span>
          <span>. כל הזכויות שמורות.</span>
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import "../styles/header.css";
import heroVideo from "../assets/Hero video.mp4";
import qrImg from "../assets/images/image 8.png";

export default function Header() {
  return (
    <header className="header" aria-label="Hero section">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <div className="gradient" />

      <div className="hero-section">
        <div className="hero-text">
          <div className="h">מצא מקומות חניה בקלות</div>

          <div className="p-wrapper">
            <p className="p">
              תגיד שלום לנסיעות חסרות מטרה בחיפוש אחר חניה.
              <br />
              מצא והזמן מקומות חניה מיידית עם האפליקציה החכמה שלנו.
            </p>
          </div>
        </div>

        <div className="btns">
          <button className="btn btn-download"> הורד אפליקציה</button>
          <button className="btn btn-show">צפה בהדגמה</button>
        </div>
      </div>

      <div className="QR">
        <p className="p-2">או פשוט לסרוק את הקוד</p>

        <div className="QR-CODE">
          <img className="image" alt="QR code" src={qrImg} />
        </div>
      </div>
    </header>
  );
}

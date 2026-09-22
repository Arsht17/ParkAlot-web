import React from "react";
import "../styles/header.css";
import heroVideo from "../assets/Hero video.mp4";
import qrImg from "../assets/images/image 8.png";

export default function Header() {
  return (
    <header className="header" id="header" aria-label="Hero section">
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
          <h1 className="h">מוצאים חניה בלי סיבובים</h1>

          <div className="p-wrapper">
            <p className="p">
              הופכים חניה לפשוטה, מהירה וללא לחץ לנהגים בכול מקום.
            </p>
          </div>
        </div>

        <div className="btns">
          <button className="btn btn-download">הורידו את PARKO</button>
          <button className="btn btn-show">צפה בהדגמה</button>
        </div>
      </div>

      <div className="QR">
        <p className="p-2">או סרקו את הקוד</p>

        <div className="QR-CODE">
          <img
            className="image"
            alt="QR code להורדת אפליקציית PARKO"
            src={qrImg}
          />
        </div>
      </div>
    </header>
  );
}

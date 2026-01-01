import React from "react";
import "../styles/showcase-section.css";
import parkingImg from "../assets/images/source/(Wooden Hands).png";

const bullets = [
  "מעל 10,000 מקומות חניה ברשת שלנו",
  "זמן תגובה ממוצע: 30 שניות",
  "זמינות 24/7 בערים מרכזיות",
];

export default function ParkingShowcaseSection() {
  return (
    <section className="parking-section" id="business" dir="rtl">
      <div className="parking-section__content">
        <h2 className="parking-section__title">חניה פשוטה לכולם</h2>
        <p className="parking-section__text">
          בין אם אתה נוסע לעבודה, קונה במרכז העיר או מבקר חברים,{" "}
          <span className="parking-section__brand">PARKO</span> מסיר את הלחץ
          מחיפוש חניה. רשת מקומות החניה המאומתים שלנו ברחבי העיר מבטיחה שתמיד
          יהיה לך מקום לחנות.
        </p>
        <ul className="parking-section__list">
          {bullets.map((item) => (
            <li key={item} className="parking-section__item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="parking-section__media" aria-hidden="true">
        <img
          className="parking-section__image"
          src={parkingImg}
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  );
}

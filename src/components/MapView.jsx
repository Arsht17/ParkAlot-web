import React from "react";
import "../styles/map.css";
import Poster from "../assets/Website_2.png";

export default function MapView() {
  return (
    <section className="pa-map pa-section" id="map">
      <div className="pa-map__inner" dir="rtl">
        <div className="pa-map__preview">
          <img src={Poster} alt="Map preview" />
        </div>
        <div className="pa-map__info">
          <h3>מפה ותצוגת חניה</h3>
          <p>מצא חניונים בסביבה ותראה פירוט עלות וזמינות בזמן אמת.</p>
        </div>
      </div>
    </section>
  );
}

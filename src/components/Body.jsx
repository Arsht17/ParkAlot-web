import React from "react";
import FeaturesSection from "./FeaturesSection";
import ParkingShowcaseSection from "./ParkingShowcaseSection";
import StatsSection from "./StatsSection";
import "../styles/body.css";

export default function Body() {
  return (
    <div className="body" dir="rtl">
      <FeaturesSection />
      <ParkingShowcaseSection />
      <StatsSection />
    </div>
  );
}

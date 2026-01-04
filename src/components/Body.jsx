import React, { useState } from "react";
import FeaturesSection from "./FeaturesSection";
import ParkingShowcaseSection from "./ParkingShowcaseSection";
import StatsSection from "./StatsSection";
import "../styles/body.css";

export default function Body() {
  const [seen, setSeen] = useState({
    features: false,
    showcase: false,
    stats: false,
  });

  return (
    <div className="body" dir="rtl">
      <FeaturesSection
        isVisible={seen.features}
        onReveal={() => setSeen((s) => ({ ...s, features: true }))}
      />
      <ParkingShowcaseSection
        isVisible={seen.showcase}
        onReveal={() => setSeen((s) => ({ ...s, showcase: true }))}
      />
      <StatsSection
        isVisible={seen.stats}
        onReveal={() => setSeen((s) => ({ ...s, stats: true }))}
      />
    </div>
  );
}

import React from "react";

export default function ParkingCard({ title, price, distance }) {
  return (
    <article className="pa-parking__card" aria-label={title}>
      <div>
        <h3 className="pa-parking__title">{title}</h3>
        <p className="pa-parking__distance">{distance}</p>
      </div>
      <div className="pa-parking__price">{price}</div>
    </article>
  );
}

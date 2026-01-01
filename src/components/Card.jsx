import React from "react";
import "../styles/card.css";
import gloss from "../assets/gloss.gif";

export default function Card({
  className = "",
  iconClassName = "",
  property1 = "default",
  text,
  text1,
}) {
  return (
    <div className={`card card--${property1} ${className}`.trim()}>
      <img className="card__gloss" src={gloss} alt="" aria-hidden="true" />
      <div className="card__frame">
        <div
          className={`card__icon ${iconClassName}`.trim()}
          aria-hidden="true"
        />
        <div className="card__text-wrapper">
          <div className="card__title">{text}</div>
          <div className="card__copy">{text1}</div>
        </div>
      </div>
    </div>
  );
}

import React, { useReducer } from "react";
import Card from "./Card";
import "../styles/features-section.css";

const DEFAULT_ICONS = {
  cardIconClassName: "card__icon--shield",
  cardIconClassNameOverride: "card__icon--phone",
  cardDivClassName: "card__icon--location",
  cardDivClassNameOverride: "card__icon--alert",
  cardIconClassName1: "card__icon--car",
  cardIconClassName2: "card__icon--clock",
};

export default function FeaturesSection({
  isVisible = false,
  onReveal = () => {},
  property1,
  className = "",
  text = "?",
  cardIconClassName = DEFAULT_ICONS.cardIconClassName,
  cardIconClassNameOverride = DEFAULT_ICONS.cardIconClassNameOverride,
  cardDivClassName = DEFAULT_ICONS.cardDivClassName,
  cardDivClassNameOverride = DEFAULT_ICONS.cardDivClassNameOverride,
  cardIconClassName1 = DEFAULT_ICONS.cardIconClassName1,
  cardIconClassName2 = DEFAULT_ICONS.cardIconClassName2,
}) {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <section
      id="about"
      className={`features-section ${
        isVisible ? "is-visible" : ""
      } property-1-0-${state.property1} ${className}`.trim()}
      onMouseEnter={() => {
        onReveal();
        dispatch("mouse_enter");
      }}
    >
      <div className="h">
        <h2 className="p">
          <span className="span">למה לבחור ב-</span>
          <span className="text-wrapper-2">PARKO</span>
          <span className="span">{text}</span>
        </h2>

        <p className="p-2">
          מחיפוש לפי יעד ועד ניווט לחניה, PARKO עוזרת לכם למצוא מקום ולהזמין אותו מראש.
        </p>
      </div>

      <div className="cards">
        <Card
          className="card-instance"
          iconClassName={cardIconClassName}
          property1="default"
          text="מקומות חניה מאומתים"
          text1="מקומות החניה ברשת נבדקים לפני שהם מוצגים. מידע רגיש נשמר בהצפנה."
        />
        <Card
          className="instance-node"
          iconClassName={cardIconClassNameOverride}
          property1="default"
          text="חיפוש מהנייד"
          text1="אפליקציה אינטואיטיבית שתוכננה לגישה מהירה בזמן תנועה. פשוט, מהיר ואמין."
        />
        <Card
          className="card-2"
          iconClassName={cardDivClassName}
          property1="default"
          text="חיפוש לפי יעד"
          text1="חיפוש מבוסס בינה מלאכותית מציג חניות זמינות לפי היעד וההעדפות שלכם."
        />
        <Card
          className="card-3"
          iconClassName={cardDivClassNameOverride}
          property1="default"
          text="תזכורת לפני הסיום"
          text1="קבלו תזכורת לפני שזמן החניה מסתיים ובדקו אפשרות להארכה."
        />
        <Card
          className="card-4"
          iconClassName={cardIconClassName1}
          property1="default"
          text="ניווט עד לחניה"
          text1="קבלו מסלול עד לכניסה למתחם או למקום החניה שהזמנתם."
        />
        <Card
          className="card-5"
          iconClassName={cardIconClassName2}
          property1="default"
          text="זמינות בזמן אמת"
          text1="בדקו אילו מקומות פנויים לפני שאתם יוצאים לדרך."
        />
      </div>
    </section>
  );
}

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
    default:
      return state;
  }
}

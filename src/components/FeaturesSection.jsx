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
          דמיינו מחדש את החניה כדי להפוך אותה לפשוטה, מהירה וללא לחץ. הנה מה
          שמבדיל אותנו.
        </p>
      </div>

      <div className="cards">
        <Card
          className="card-instance"
          iconClassName={cardIconClassName}
          property1="default"
          text="בטוח ומוגן"
          text1={
            <>
              כל מיקומי החניה מאומתים ובטוחים. פרטיותך חשובה לנו ואנו מצפינים
              <br />
              נתונים רגישים ברמה גבוהה.
            </>
          }
        />
        <Card
          className="instance-node"
          iconClassName={cardIconClassNameOverride}
          property1="default"
          text="חווית מובייל מתקדמת"
          text1={
            <>
              אפליקציה אינטואיטיבית שתוכננה לגישה מהירה בזמן תנועה. פשוט,
              <br />
              מהיר ואמין.
            </>
          }
        />
        <Card
          className="card-2"
          iconClassName={cardDivClassName}
          property1="default"
          text="איתור מיקום חכם"
          text1="חיפוש מבוסס בינה מלאכותית מוצא את מקומות החניה הזמינים הקרובים ביותר בהתבסס על יעד והעדפות."
        />
        <Card
          className="card-3"
          iconClassName={cardDivClassNameOverride}
          property1="default"
          text="תזכורות חכמות"
          text1={
            <>
              קבל התראה לפני שהחניה שלך פגה עם התראות הניתנות להתאמה
              <br />
              ואפשרויות הארכה קלות.
            </>
          }
        />
        <Card
          className="card-4"
          iconClassName={cardIconClassName1}
          property1="default"
          text="ניווט חכם לחניה"
          text1="קבל ניווט מדויק לשער המתחם או למיקום החניה שלך כדי להגיע מהר וללא סיבוכים."
        />
        <Card
          className="card-5"
          iconClassName={cardIconClassName2}
          property1="default"
          text="ניווט חכם לחניה"
          text1={
            <>
              עדכוני זמינות חיים מבטיחים שלעולם לא תגיע ותמצא שהמקום השמור
              <br />
              שלך כבר תפוס.
            </>
          }
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

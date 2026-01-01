import React from "react";
import Card from "./Card";
import "../styles/stats-section.css";
import "../styles/stats-section-content.css";
import googlePlay from "../assets/images/Google Play.png";
import appStore from "../assets/images/Apple Inc.png";

export default function StatsSection() {
  return (
    <section className="stats-section" id="guide" dir="rtl">
      <div className="stats-section__inner">
        <div className="section">
          <div className="section__content">
            <div className="section__list">
              <div className="section__h">
                <header className="section__header">
                  <p className="section__div">
                    מוכנים לשנות את חווית החניה שלכם?
                  </p>
                  <p className="section__p">
                    הצטרפו לאלפי נהגים שגילו את הדרך הקלה ביותר לחנות בעיר.
                  </p>
                </header>
              </div>

              <div className="section__list-2">
                <Card
                  className="stats-card card-s-instance"
                  iconClassName="stats-card__icon stats-card__icon--downloads"
                  property1="default"
                  text="+10K"
                  text1="הורדות"
                />
                <Card
                  className="stats-card card-s-2"
                  iconClassName="stats-card__icon stats-card__icon--rating"
                  property1="default"
                  text="4.5/5"
                  text1="דירוג האפליקציה"
                />
                <Card
                  className="stats-card card-s-4"
                  iconClassName="stats-card__icon stats-card__icon--users"
                  property1="default"
                  text="+5K"
                  text1="משתמשים מרוצים"
                />
              </div>
            </div>
          </div>

          <div className="section__p-btns" id="download">
            <p className="section__p-2">
              <span className="text-wrapper-5">הורידו את </span>
              <span className="text-wrapper-6">PARKO</span>
              <span className="text-wrapper-5"> עכשיו!</span>
            </p>

            <div className="section__btns-download">
              <a
                href="https://apps.apple.com/il/app/parkalot-%D7%A4%D7%90%D7%A8%D7%A7%D7%90%D7%9C%D7%95%D7%98/id6754233739"
                className="store-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="store-button__icon"
                  src={appStore}
                  alt="apple store"
                  aria-hidden="true"
                />
                <span className="store-button__text">
                  <span className="store-button__eyebrow">DOWNLOAD ON THE</span>
                  <span className="store-button__label">Apple Store</span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.parkalot.parkalot"
                className="store-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="store-button__icon"
                  src={googlePlay}
                  alt="google play"
                  aria-hidden="true"
                />
                <span className="store-button__text">
                  <span className="store-button__eyebrow">GET IT ON</span>
                  <span className="store-button__label">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

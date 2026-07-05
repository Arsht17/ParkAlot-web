import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/website.css";

export default function Website() {
  return (
    <div className="website" dir="rtl">
      <div className="website__nav">
        <Navbar />
      </div>
      <main className="page">
        <Header />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

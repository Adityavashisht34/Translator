import React from "react";
import Header from "/Users/adityavashisht/Desktop/ReactJSCollege/translatorapp/src/components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import "/Users/adityavashisht/Desktop/TranslatorAppProjectCollege/translatorApp/src/index.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

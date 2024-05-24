import React from "react";
import {NavLink} from "react-router-dom"
import "/Users/adityavashisht/Desktop/ReactJSCollege/translatorapp/src/components/Header/Header.css";
import backgroundVideo from "/Users/adityavashisht/Desktop/ReactJSCollege/translatorapp/src/assets/backgroundvideo.mp4";
function LetsTranslate() {
  return (
    <>
      <div className="background-video">
        <video className="background-clip" autoPlay loop muted alternate>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <section className="lets-translate">
          <p>Let's Translate</p>
          <NavLink to = "/translatorapp">
            <button className="go-to-app">Go To App</button>
          </NavLink>
        </section>
      </div>
    </>
  );
}

export default LetsTranslate;

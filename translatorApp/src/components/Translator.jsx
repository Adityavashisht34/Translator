import { useEffect, useState } from "react";
// use state is used for state management in website, konse button click, ya link click pr website kaise behave kregi. use state me hr baar website reload hoti hai
//use effect se particular actions pr re-render application, jisse ek toh loading duration, particular events pr re-render ke liye dependencies joh hm pass krte hai, dependency ka mtlab uss particular function call ya event hote hi use effect call hoga and joh hm andar instructions voh execute hoyenge
import axios from "axios";
// use state syntax:
// const/var/let [text,set text] = useState();
// useEffect(()=>{
//  instructions
//},[dependencies])
import lang from "../../languages";
import "/Users/adityavashisht/Desktop/ReactJSCollege/translatorapp/src/components/TranslatorFolder/Translator.css";
import backgroundVideo from "/Users/adityavashisht/Desktop/ReactJSCollege/translatorapp/src/assets/backgroundvideo.mp4";

function Translator() {
  const [fromText, setFromText] = useState();
  const [toText, setToText] = useState();
  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [toLanguage, setToLanguage] = useState("es-ES");
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLanguages(lang);
  }, []);

  const handleExchange = () => {
    let tempValue = fromText;
    setFromText(toText);
    setToText(tempValue);

    let tempLang = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLang);
  };
  const serverCall = (e) => {
    e.preventDefault();
    console.log(fromLanguage);
    console.log(fromText);
    console.log(toLanguage);
    console.log(toText);
    let data = {
      fromlanguage: fromLanguage,
      fromtranslation: fromText,
      tolanguage: toLanguage,
      totranslation: toText,
    };
    axios
      .post("http://127.0.0.1:3001/translationsData", data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const Translate = () => {
    setLoading(true);
    let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.responseData.translatedText);
        setToText(data.responseData.translatedText);
        setLoading(false);
      });
  };
  const TranslateTo = ()=>{
      setLoading(true);
      let url = `https://api.mymemory.translated.net/get?q=${toText}&langpair=${toLanguage}|${toLanguage}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.responseData.translatedText);
          setToText(data.responseData.translatedText);
          setLoading(false);
        });
  }

  return (
    <>
      <div className="background-video">
        <video className="background-clip" autoPlay loop muted alternate>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="word-of-the-day">
          <h1>Word of the Day</h1>
          <h2>Good Morning (English) = Bonjour (French) </h2>
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="text-input">
              <textarea
                name="from"
                className="from-text"
                placeholder="Enter Text"
                id="from"
                value={fromText}
                onChange={(e) => {
                  setFromText(e.target.value);
                  if (e.target.value == "") {
                    setToText("");
                    return;
                  } else {
                    Translate();
                  }
                }}
              ></textarea>
              <textarea
                name="to"
                className="to-text"
                id="to"
                value={toText}
                readonly
              ></textarea>
            </div>
            <ul className="controls">
              <li className="row from">
                <div className="icons">
                  <i id="from" className="fa-solid fa-volume-high"></i>
                  <i id="from" className="fa-solid fa-copy"></i>
                </div>
                <select
                  value={fromLanguage}
                  onChange={(e) => {
                    setFromLanguage(e.target.value);
                  }}
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </li>
              <li className="row to">
                <select
                  value={toLanguage}
                  onChange={(e) => {
                    setToLanguage(e.target.value);
                    Translate();
                  }}
                >
                  {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </div>
          <div className="translate-btn">
            <button
              onClick={(e) => {
                Translate();
                console.log(e);
                serverCall(e);
              }}
              disabled={loading}
            >
              {loading ? "Translating" : "Save Translation"}
            </button>
          </div>
          <section className="demo-translations">
            <div className="basic-translation">
              <div className="demo-translation-container">
                <div className="from-container">
                  <div className="language-container">
                    <center>English</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>Good Morning</h2>
                    </center>
                  </div>
                </div>
                <div className="to-container">
                  <div className="language-container">
                    <center>French</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>Bonjour</h2>
                    </center>
                  </div>
                </div>
              </div>
              <div className="demo-translation-container">
                <div className="from-container">
                  <div className="language-container">
                    <center>French</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>Je m'appelle John</h2>
                    </center>
                  </div>
                </div>
                <div className="to-container">
                  <div className="language-container">
                    <center>Croatian</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>Zovem se John</h2>
                    </center>
                  </div>
                </div>
              </div>
              <div className="demo-translation-container">
                <div className="from-container">
                  <div className="language-container">
                    <center>English</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>I want some coffee</h2>
                    </center>
                  </div>
                </div>
                <div className="to-container">
                  <div className="language-container">
                    <center>Indonesian</center>
                  </div>
                  <div className="sentence-container">
                    <center>
                      <h2>Saya ingin kopi</h2>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Translator;

"use client";
import "@/public/styles/index.scss";
import React, { useEffect } from "react";
import T from "@/public/data/translate.json";
import path from "path";



interface CardInterface {
  title: string;
  description: string;
  actionName: string;
  url?: string;
  image?: string;
}
interface InsideTranslate{ 
     "welcome-description": string;
    "welcome-title": string;
    "switch-lang": string;
    "lang": "FR" | "EN";
    "openToWork": {
      "clients": string;
      "contactText": string;
    },
    "requestDemo": string;
    "home": string;
    "projectLanguages": string;
    "journey": {
      "title": string;
      "description": string;
      "projectInDev": string;
      "projectView": string;
      "tiles": {
        title: string;
        description: string;
        date: number;
        url: string;
        timespan: string;
        accessible: boolean;
        image: string;
      }[];
    },
    "cards": {
      "cv": CardInterface;
      "design": CardInterface;
      "archives": CardInterface;
      "nass": CardInterface;
    },
    "design" : {
      "files": string;
      "title": string;
      "description": string;
      "history": string;
      "content" : {
        name: string;
        url: string;
        description: string;
        developed: boolean;
        language: "FR" | "EN";
        files: {
          name: string;
          url: string;
        }[];
      }[];
    },
    "about-me" : {
      "title": string;
      "valuesTitle": string;
      "ambitionsContent" : {
        "title": string;
      },
      "valuesContent" : {
        "title": string;
      },
      "person" : {
        "title": string;
        "descriptionTitle": string;
        "description": string;
      },
      "professional" : {
        "title": string;
        "descriptionTitle": string;
        "description": string;
      },
      "ambitionsTitle": string;
      "ambitions" : {
        name: string;
        description: string;
        icon: string;
      }[];
      "values" : {
        name: string;
      }[];
    },
    "learn-more": {
      "title": string;
      "links" : {
        name: string;
        url: string;
      }[];
    },
  }
interface TranslationData {
  "FR": InsideTranslate;
  "EN": InsideTranslate;

}

const Translation: TranslationData = T as unknown as TranslationData;

// Context provider for children:
const TranslateContext = React.createContext<{
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  translate: InsideTranslate;
}>({
  lang: "EN",
  setLang: () => { },
  translate: Translation["EN"],
});

export const useTranslate = () => React.useContext(TranslateContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [lang, setLang] = React.useState("EN");
  const [translate, setTranslate] = React.useState<InsideTranslate>(Translation["EN"]);

  const [currentPage, setCurrentPage] = React.useState(path.basename(window.location.pathname) || "home");


  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && (storedLang === "EN" || storedLang === "FR")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(storedLang);
      setTranslate(Translation[storedLang]);
    }
  }, []);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);




  return (
    <html lang="en">
      <body>

        <div className="app__footer">
          {
            currentPage != "home" && (
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a href="/" className="app__footer__link">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M253-446q-9-6-13.5-15t-4.5-19q0-10 4.5-19t13.5-15l326-207q5-3 10.5-4.5T600-727q16 0 28 11.5t12 28.5v414q0 17-12 28.5T600-233q-5 0-10.5-1.5T579-239L253-446Z"/></svg>
                <span>
                  {translate ? translate["home"] : "Loading..."}
                </span>
              </a>
            )
          }
          <div className="open__to__work">
            <div className="slide__text">
              {translate ? translate["openToWork"]["clients"] : "Loading..."}
              <a href="mailto:mougel.david@naflows.com" className="slide__text--link">
                {translate ? translate["openToWork"]["contactText"] : "Loading..."}
              </a>
            </div>
          </div>
          <div className="language-switcher">
            {([
              { n: "EN", l: "English" },
              { n: "FR", l: "Français" }
            ] as { n: "EN" | "FR"; l: string }[]).map((language : { n: "EN" | "FR"; l: string }) => (
              <button
                key={language.n}
                onClick={() => {
                  setLang(language.n);
                  setTranslate(Translation[language.n]);
                }}
                className={
                  lang === language.n
                    ? "language-switcher__button--active"
                    : "language-switcher__button"
                }
              >
                {language.l}
              </button>
            ))}
          </div>
        </div>


        <TranslateContext.Provider value={{ lang, setLang, translate }}>
          {children}
        </TranslateContext.Provider>


      </body>
    </html>
  );
}

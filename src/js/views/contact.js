import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Contact = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="py-5 bg-secondary text-light" id="contact">
            <div className="container mt-5 pt-3" >
                <h1 className="robotmono">{"<" + translations[language].contact + " />"}</h1>
            </div>
        </div>
    );
};
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Education = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="py-5 bg-secondary text-light" id="education">
            <div className="container mt-5 pt-3" >
                <h1 className="robotmono">{"<" + translations[language].education + " />"}</h1>
            </div>
        </div>
    );
};
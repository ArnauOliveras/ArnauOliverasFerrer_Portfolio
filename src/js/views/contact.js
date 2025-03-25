import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Contact = (props) => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="py-5 bg-contact text-light" id="contact">
            <div className="container mt-5 pt-3 z-index-1" >
                <h1 className="robotmono mb-4">{"<" + translations[language].contact + " />"}</h1>

                <div className="d-flex flex-column align-items-center justify-content-center p-4  rounded ">
                    <h2 className="text-center text-light">Arnau Oliveras Ferrer</h2>
                    <p className="text-center text-light mb-1">Mataró, Barcelona</p>
                    <p className="text-center text-light mb-1">arnauolifer@gmail.com</p>
                    <p className="text-center text-light mb-1">+34 638 72 85 96</p>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="https://www.linkedin.com/in/arnauoliveras/" className="mx-2" target="_blank" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin fa-2x text-primary"></i>
                        </a>
                        <a href="https://github.com/ArnauOliveras" className="mx-2" target="_blank" aria-label="GitHub">
                            <i className="fa-brands fa-github fa-2x text-light"></i>
                        </a>
                        <a href="https://arnau-oliveras.itch.io/" className="mx-2" target="_blank" aria-label="Itch.io">
                            <i className="fa-brands fa-itch-io fa-2x text-danger"></i>
                        </a>
                        <a href={props.cv} download="ArnauOliverasFerrer_CV.pdf" className="mx-2" target="_blank">
                            <i className="fa-solid fa-file fa-2x text-light"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
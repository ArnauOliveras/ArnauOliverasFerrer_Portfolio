import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";
import AboutMeImg from "../../img/AboutMe.jpg"
export const AboutMe = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="pb-2 bg-aboutMe text-light pt-5" id="aboutme">


            <div className="container mt-5 pt-3 z-index-1 mb-5 pb-5">
                <h1 className="robotmono">{"<" + translations[language].aboutMe + " />"}</h1>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div
                            className="mx-2"
                            dangerouslySetInnerHTML={{ __html: translations[language].aboutMeText }}
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
                        <img
                            className="mx-4"
                            src={AboutMeImg}
                            style={{ width: "100%", maxWidth: "500px", height: "auto", objectFit: "cover", borderRadius: "30% 70% / 50% 50%" }}
                            alt="About Me"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
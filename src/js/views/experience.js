import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";
import { Tech } from "../component/tech"

export const Experience = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="pt-5 bg-experience text-light " id="experience">
            <div className="container mt-5 pt-3 z-index-1" >
                <h1 className="robotmono pb-3">{"<" + translations[language].experience + " />"}</h1>
                {store.experience.map((experience, index) => {
                    const { jobNamekey, company, date, jobDescriptionKey, tech } = experience;
                    const title = translations[language][jobNamekey];
                    const description = translations[language][jobDescriptionKey];

                    return (
                        <div key={index} className="ps-3 pb-4 mb-5">

                            <div className="my-4 p-2   bg-experience-individual">
                                <h3 className="">{title}</h3>
                                <h5 className="">{company}</h5>
                                <h6 className="mb-3">{date}</h6>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: description }}></div>
                            <div className="d-flex align-items-center justify-content-center flex-wrap ">
                                {tech.map((techItem, index) => (
                                    <Tech key={index} name={techItem} />
                                ))}
                            </div>
                        </div>

                    );
                })}
            </div>

            <div className="z-index-1 pt-4">
                <div className="fade-div-experience-education"></div>
            </div>



        </div>
    );
};
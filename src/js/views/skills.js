import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

import { Tech } from "../component/tech"

export const Skills = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="py-5 bg-skills text-light bt-1 " id="skills">
            <div className="container mt-5 pt-3 z-index-1" >
                <h1 className="robotmono mb-5">{"<" + translations[language].skills + " />"}</h1>
                {store.skills.map((skill, index) => {
                    const { titleSectionKey, tech } = skill;
                    const title = translations[language][titleSectionKey];

                    return (
                        <div key={index} className="mb-4">
                            <div className="mb-4 p-2 bg-skill">
                                <h3 className="robotmono">{title}</h3>
                            </div>
                            <div className="d-flex align-items-center flex-wrap" >
                                {tech.map((techItem, index) => (
                                    <Tech key={index} name={techItem.name} lv={techItem.lv} starting={techItem.starting} icon={techItem.icon} />
                                ))}
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="z-index-1 pt-4">
                <div className="fade-div-skills-experience"></div>
            </div>
        </div>
    );
};
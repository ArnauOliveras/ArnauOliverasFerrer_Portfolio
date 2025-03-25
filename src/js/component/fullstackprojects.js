import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";
import { Tech } from "./tech"

export const FullStackProjects = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="bg-fullstackprojects pt-0" id="webProjects">
            <div className="container  pt-5 pb-2" >
                <h3 className="robotmono pb-4">{"<" + translations[language].web + " />"}</h3>
                <div className="album ">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 ">

                        {store.fullstackProjects.map((videogame, index) => {
                            const { title, descriptionKey, iconURL, demoURL, githubURL, tech } = videogame;
                            const description = translations[language][descriptionKey];
                            var titleWeb = "";

                            if (translations[language][title] === undefined)
                                titleWeb = title;
                            else
                                titleWeb = translations[language][title];


                            return (
                                <div key={index} className="col">
                                    <div className="card bg-project shadow-white-lg text-center" style={{ height: "100%" }}>
                                        <div className="card-header">
                                            <strong className="fs-3">{titleWeb}</strong>

                                            <p className="pt-3">{description}</p>
                                        </div>
                                        {demoURL && (
                                            <a href={demoURL}>
                                                <img
                                                    className="img-fluid bd-placeholder-img card-img-top"
                                                    src={iconURL}
                                                    alt={`${title} Icon`}
                                                />
                                            </a>)}
                                        {!demoURL && (
                                            <a >
                                                <img
                                                    className="img-fluid bd-placeholder-img card-img-top"
                                                    src={iconURL}
                                                    alt={`${title} Icon`}
                                                />
                                            </a>)}

                                        <div className="card-body">
                                            {tech.map((techItem, index) => (
                                                <Tech key={index} name={techItem} />
                                            ))}
                                            <div className="btn-group mt-3" style={{ width: "100%" }}>
                                                {demoURL && (<a href={demoURL} type="button" className="btn btn-outline-light" >Demo</a>)}
                                                {githubURL && (<a href={githubURL} type="button" className="btn btn-outline-light" >GitHub</a>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
            </div>
        </div>
    );
};
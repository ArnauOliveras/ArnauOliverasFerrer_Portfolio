import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";
import { Tech } from "./tech"

export const OtherProjects = () => {
    const { language, translations } = useContext(LanguageContext);
    const { store } = useContext(Context);

    return (
        <div className="bg-otherProjects pt-0 border-top border-3 border-warning" id="otherProjects">
            <div className="container pt-5 pb-2 z-index-1">
                <h3 className="pb-4 px-5 robotmono">{"<" + translations[language].otherProjects + " />"}</h3>
                {store.otherProjects.map((otherProject, index) => {
                    const { titleKey, descriptionKey, iconURL, trailesURL, subtitleKey, gitHubURL, gamePlataform, tech, imageURL } = otherProject;
                    const description = translations[language][descriptionKey];
                    const subtitle = translations[language][subtitleKey];
                    const title = translations[language][titleKey];

                    return (
                        <div key={index} className="mb-4 bg-project">
                            <div className="mb-3 pt-5 d-flex align-items-center justify-content-center text-center flex-column">
                                <h1 className="mb-4">
                                    <a className="text-decoration-none text-light">{title}</a>
                                </h1>
                                <h6 className="mb-5">{subtitle}</h6>

                                <p style={{ maxWidth: '600px' }}>
                                    {description + " "}
                                </p>
                            </div>
                            {trailesURL && iconURL ? (
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4">

                                    <img
                                        className="rounded-3 mb-3 mb-md-0"
                                        src={iconURL}
                                        alt={`${title} Icon`}
                                        style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "315px", objectFit: "cover" }}
                                    />
                                    <iframe
                                        className="rounded-3"
                                        width="100%"
                                        style={{ maxWidth: '500px' }}
                                        height="315"
                                        src={trailesURL.replace("watch?v=", "embed/")}
                                        title={title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : iconURL && !trailesURL && imageURL ? (
                                <a href={""} className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4">
                                    <img
                                        className="rounded-3 mb-3 mb-md-0"
                                        src={iconURL}
                                        alt={`${title} Icon`}
                                        style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "315px", objectFit: "cover" }}
                                    />
                                    <img
                                        className="rounded-3 mb-3 mb-md-0"
                                        src={imageURL}
                                        alt={`${title} Icon`}
                                        style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "315px", objectFit: "cover" }}
                                    />
                                </a>
                            ) : iconURL && !trailesURL && !imageURL ? (
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4">
                                    <img
                                        className="rounded-3 mb-3 mb-md-0"
                                        src={iconURL}
                                        alt={`${title} Icon`}
                                        style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "500px", objectFit: "cover" }}
                                    />
                                </div>
                            ) : null}

                            <div className="text-center pb-3">
                                {gitHubURL ? (
                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <div className="d-grid gap-2" style={{ width: '500px' }}>
                                            <a href={gitHubURL} type="button" className="btn btn-light m-3 shadow-white">
                                                {"GitHub"}
                                            </a>
                                        </div>
                                    </div>
                                ) :
                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <div className="d-grid gap-2" style={{ width: '500px' }}>
                                            <a className="btn btn-light m-3 shadow-white" disabled>
                                                {translations[language].comingSoon}
                                            </a>
                                        </div>
                                    </div>
                                }

                                {tech.map((techItem, index) => (
                                    <Tech key={index} name={techItem} />
                                ))}
                            </div>

                        </div>

                    );
                })}
            </div>

            <div className="z-index-1 pt-4">
                <div className="fade-div-projects-skills"></div>
            </div>
        </div>
    );
};

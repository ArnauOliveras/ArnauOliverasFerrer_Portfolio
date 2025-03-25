import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

import { Tech } from "../component/tech"
export const Education = () => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="py-5 bg-education text-light" id="education">
            <div className="container mt-5 pt-3 z-index-1" >
                <h1 className="robotmono">{"<" + translations[language].education + " />"}</h1>
                {store.education.map((education, index) => {
                    const { educationNamekey, company, date, tech, educationDescriptionkey, imageURL, trailerURL, idProject } = education;
                    const title = translations[language][educationNamekey];
                    const description = translations[language][educationDescriptionkey];

                    return (
                        <div key={index} className="ps-3 pb-4 mb-5">

                            <div className="my-4 p-2 bg-education-individual">
                                <h3 className="">{title}</h3>
                                <h5 className="">{company}</h5>
                                <h6 className="mb-3">{date}</h6>


                            </div>


                            <div className="d-flex align-items-center justify-content-center flex-wrap pb-3">
                                <div className="d-flex align-items-center justify-content-center flex-wrap " style={{ width: "100%", maxWidth: "800px" }}>
                                    {tech.map((techItem, index) => (
                                        <Tech key={index} name={techItem} />
                                    ))}
                                </div>
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: description }}></div>
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4 mb-4">

                                {imageURL && (
                                    <img
                                        className="rounded-3 mb-3 mb-md-0"
                                        src={imageURL}
                                        alt={title}
                                        style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "315px", objectFit: "cover" }}
                                    />
                                )}

                                {trailerURL && (
                                    <iframe
                                        className="rounded-3"
                                        width="100%"
                                        style={{ maxWidth: "500px" }}
                                        height="315"
                                        src={trailerURL.replace("watch?v=", "embed/")}
                                        title={title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}

                            </div>
                            <div className="d-flex align-items-center justify-content-center pb-2">
                                <a type="button" className="btn btn-outline-light px-5" href={idProject}>{translations[language]["goToProject"]}</a>
                            </div>

                        </div>

                    );
                })}
            </div>

            <div className="z-index-1 pt-4">
                <div className="fade-div-education-contact"></div>
            </div>



        </div>
    );
};
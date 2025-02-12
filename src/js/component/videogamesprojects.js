import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";
import { Tech } from "./tech"

export const VideogamesProjects = () => {
    const { language, translations } = useContext(LanguageContext);
    const { store } = useContext(Context);

    return (
        <div className="bg-videogamesprojects pt-0">
            <div className="container pt-5 pb-2">
                <h3 className="pb-4 px-5 robotmono">{"<" + translations[language].videogames + " />"}</h3>
                {store.videogamesProjects.map((videogame, index) => {
                    const { title, descriptionKey, iconURL, trailesURL, subtitleKey, gameURL, gamePlataform, tech, imageURL } = videogame;
                    const description = translations[language][descriptionKey];
                    const subtitle = translations[language][subtitleKey];

                    return (
                        <div key={index} className="mb-4 bg-project">
                            <div className="mb-3 pt-5 d-flex align-items-center justify-content-center text-center flex-column">
                                <h1 className="mb-4">
                                    <a href={gameURL} className="text-decoration-none text-light">{title}</a>
                                </h1>
                                <h6 className="mb-5">{subtitle}</h6>

                                <p style={{ maxWidth: '500px' }}>
                                    {description + " "}
                                    <br />
                                    {gameURL && (
                                        <a href={gameURL} className="text-light">
                                            {translations[language].moreInfo + " " + gamePlataform}
                                        </a>
                                    )}
                                </p>
                            </div>
                            {trailesURL && iconURL ? (
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4">
                                    <a href={gameURL}>
                                        <img
                                            className="rounded-3 mb-3 mb-md-0"
                                            src={iconURL}
                                            alt={`${title} Icon`}
                                            style={{ width: "100%", maxWidth: "600px", height: "100%", maxHeight: "315px", objectFit: "cover" }}
                                        />
                                    </a>
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
                                <a href={gameURL} className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-4">
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
                                {gameURL ? (
                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <div className="d-grid gap-2" style={{ width: '500px' }}>
                                            <a href={gameURL} type="button" className="btn btn-light m-3 shadow-white">
                                                {"Demo " + gamePlataform}
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

                <div className="mb-4">
                    <div className="mb-3 pt-5 d-flex align-items-center justify-content-center text-center flex-column">
                        <h3 className="mb-4">
                            <a href="https://arnau-oliveras.itch.io/" className=" text-light">{translations[language].moreGameProjects}</a>
                        </h3>
                        <a href="https://arnau-oliveras.itch.io/" >
                            <img
                                className="rounded-3 mb-3 mb-md-0"
                                src="https://yt3.googleusercontent.com/ytc/AIdro_kLPXPsWfJ6NhQqbZA8RTgs_tZc-my-bvASFAvMOB7soQ=s900-c-k-c0x00ffffff-no-rj"
                                alt={`Itch.io Icon`}
                                style={{ width: "100%", maxWidth: "50px", height: "100%", maxHeight: "50px", objectFit: "cover" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { Component, useContext, useEffect, useState } from "react";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Tech = (props) => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const [name, setName] = useState(props.name);
    const [lv, setLv] = useState(props.lv);
    const [starting, setStarting] = useState(props.starting);
    const [icon, setIcon] = useState(props.icon);

    const renderLevel = (level) => {
        let squares = [];
        for (let i = 0; i < 5; i++) {
            squares.push(
                <div
                    key={i}
                    className={`level-square ${i < level ? "filled" : ""}`}
                />
            );
        }
        return squares;
    };

    const renderIcon = (icon) => {
        const isImage = /\.(jpg|jpeg|png|gif|svg)$/i.test(icon);

        if (isImage) {
            return <img src={icon} alt="icono" className="mb-3" style={{ width: "auto", height: "75px" }} />;
        } else {
            return <div className="fs-10 mb-3 text-light" dangerouslySetInnerHTML={{ __html: icon }} />;
        }
    };

    return (
        <>
            {lv && (
                <div className="border border-warning text-warning p-2 d-inline-block m-2 rounded shadow-white skill-container d-flex flex-column align-items-center text-center" >
                    {renderIcon(icon)}

                    <div className="level-container mb-3">
                        {renderLevel(lv)}
                    </div>
                    <div className="mt-1 fs-5"><strong>{name}</strong></div>

                    {starting && (
                        <p className="my-2 fs-6">{translations[language]["learning"]}</p>
                    )}
                </div>
            )}

            {!lv && (
                <div className="border border-warning text-warning p-2 d-inline-block m-2 rounded shadow-white text-center">
                    {name}
                </div>
            )}
        </>
    );
};

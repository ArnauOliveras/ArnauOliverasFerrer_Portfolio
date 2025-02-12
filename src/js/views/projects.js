import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Game } from "../component/game.js";
import { WebTransition } from "../component/webtransition.js";
import { VideogamesProjects } from "../component/videogamesprojects.js";
import { FullStackProjects } from "../component/fullstackprojects.js";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext.js";

export const Projects = (prop) => {
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const { store, actions } = useContext(Context);

    return (
        <div className="text-light" id="projects">

            {prop.rol === "fullstack" ? (
                <>
                    <div className="d-flex justify-content-center pt-5 bg-aboutMe">
                        <WebTransition />
                    </div>
                    <div className=" pt-5 pb-1 bg-fullstackprojects" >
                        <div className="container">

                            <h1 className="robotmono">{"<" + translations[language].projects + " />"}</h1>
                        </div>
                    </div>
                    <FullStackProjects />
                    <div className="d-flex justify-content-center pt-5 bg-fullstackprojects">
                        <Game />
                    </div>
                    <VideogamesProjects />
                </>
            ) : (
                <>
                    <div className="d-flex justify-content-center pt-5 bg-aboutMe">
                        <Game />
                    </div>
                    <div className=" pt-5 pb-1 bg-videogamesprojects" >
                        <div className="container">

                            <h1 className="robotmono">{"<" + translations[language].projects + " />"}</h1>
                        </div>
                    </div>
                    <VideogamesProjects />
                    <div className="d-flex justify-content-center pt-5 bg-videogamesprojects">
                        <WebTransition />
                    </div>
                    <FullStackProjects />
                </>
            )}

        </div>
    );
};
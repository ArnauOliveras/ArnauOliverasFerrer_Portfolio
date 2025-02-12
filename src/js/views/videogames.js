import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home.js";
import { AboutMe } from "./aboutme.js";
import { Education } from "./education.js";
import { Experience } from "./experience.js";
import { Skills } from "./skills";
import { Projects } from "./projects.js";
import { Navbar } from "../component/navbar.js";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

import cvvideogames from "../../docs/CV_ArnauOliverasFerrer_Videogames.pdf";

export const Videogames = () => {
    const { store, actions } = useContext(Context);
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const [rol, setRol] = useState("Videogames Developer");
    const [otherRol, setOtherRol] = useState("Full Stack");
    const [otherRolLink, setOtherRolLink] = useState("fullstack");

    return (
        <div >
            <Navbar rol={translations[language].videogamesDeveloper} />
            <Home cv={cvvideogames} rol={translations[language].videogamesDeveloper} otherrollink={otherRolLink} otherrol={translations[language].fullStackPortfolio} />
            <AboutMe />
            <Projects rol="videogames" />
            <Skills />
            <Experience />
            <Education />
        </div>
    );
};
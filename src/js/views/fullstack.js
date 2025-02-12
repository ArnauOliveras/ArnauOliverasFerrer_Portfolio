import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home";
import { AboutMe } from "./aboutme";
import { Education } from "./education";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Navbar } from "../component/navbar";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";


import cvfullstack from "../../docs/CV_ArnauOliverasFerrer_FullStack.pdf";

export const FullStack = () => {
    const { store, actions } = useContext(Context);
    const { language, changeLanguage, translations } = useContext(LanguageContext);
    const [rol, setRol] = useState("Full Stack Developer");
    const [otherRol, setOtherRol] = useState("Videogames");
    const [otherRolLink, setOtherRolLink] = useState("videogames");

    return (
        <div >
            <Navbar rol={translations[language].fullStackDeveloper} />
            <Home cv={cvfullstack} rol={translations[language].fullStackDeveloper} otherrollink={otherRolLink} otherrol={translations[language].videogamesPortfolio} />
            <AboutMe />
            <Projects rol="fullstack" />
            <Skills />
            <Experience />
            <Education />
        </div>
    );
};
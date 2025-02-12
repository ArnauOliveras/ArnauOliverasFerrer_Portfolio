import React, { createContext, useState, useEffect } from "react";
import translations from "./translations";

// Crear el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    // Función para obtener el idioma desde la URL
    const getLanguageFromURL = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get("lang") || "en"; // Inglés como idioma predeterminado
    };

    const [language, setLanguage] = useState(getLanguageFromURL);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        const params = new URLSearchParams(window.location.search);
        params.set("lang", lang);
        window.history.replaceState(null, "", `?${params.toString()}`);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};
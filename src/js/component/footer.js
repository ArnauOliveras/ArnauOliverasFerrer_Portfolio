import React, { Component, useContext } from "react";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Footer = (props) => {
	const { language, changeLanguage, translations } = useContext(LanguageContext);
	return (
		<footer className="footer bg-contact mt-auto py-3 text-center text-light">
			<p className="mt-3">
				{translations[language].footer}
			</p>
			<div style={{ height: "100px" }}></div>
			<div style={{ height: "100px" }}></div>
		</footer>
	);
};

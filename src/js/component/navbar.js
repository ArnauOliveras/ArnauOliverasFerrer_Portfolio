import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Navbar = (props) => {
	const [activeSection, setActiveSection] = useState("#home");
	const { language, changeLanguage, translations } = useContext(LanguageContext);


	const handleNavClick = (sectionId) => {
		setActiveSection(sectionId);
	};

	const divs = ['home', 'aboutme', 'projects', 'skills', 'experience', 'education', 'contact'];

	useEffect(() => {
		const handleScroll = () => {

			for (let i = 0; i < divs.length; i++) {
				const div = document.getElementById(divs[i]);
				const rect = div.getBoundingClientRect();
				if (rect.top <= window.innerHeight && rect.bottom >= 200) {
					handleNavClick("#" + divs[i]);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);








	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<div className="d-flex justify-content-between align-items-center justify-content-md-between align-items-md-start">
					<h3 className="navbar-text text-light py-1 px-2 fs-1">
						<i className="fa-solid fa-laptop-code"></i>
					</h3>
					<div className="d-flex flex-column align-items-center align-items-md-start">
						<p className="text-light fs-4 mb-0">Arnau Oliveras Ferrer</p>
						<p className="text-warning mt-0">{props.rol}</p>
					</div>
				</div>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className={`nav-link ${activeSection === "#home" ? "text-warning" : ""}`} href="#home" onClick={() => handleNavClick("#home")}>
								{translations[language].home}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#projects" ? "text-warning" : ""}`} href="#projects" onClick={() => handleNavClick("#projects")}>
								{translations[language].projects}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#skills" ? "text-warning" : ""}`} href="#skills" onClick={() => handleNavClick("#skills")}>
								{translations[language].skills}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#experience" ? "text-warning" : ""}`} href="#experience" onClick={() => handleNavClick("#experience")}>
								{translations[language].experience}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#education" ? "text-warning" : ""}`} href="#education" onClick={() => handleNavClick("#education")}>
								{translations[language].education}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#aboutme" ? "text-warning" : ""}`} href="#aboutme" onClick={() => handleNavClick("#aboutme")}>
								{translations[language].aboutMe}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeSection === "#contact" ? "text-warning" : ""}`} href="#contact" onClick={() => handleNavClick("#contact")}>
								{translations[language].contact}
							</a>
						</li>
						<li>
							<a className="px-1" onClick={() => changeLanguage("ca")}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2560px-Flag_of_Catalonia.svg.png" alt="Catalan" width="20" height="20" />
							</a>
							<a className="px-1" onClick={() => changeLanguage("en")}>
								<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" alt="English" width="20" height="20" />
							</a>
							<a className="px-1" onClick={() => changeLanguage("es")}>
								<img src="https://i.redd.it/tgjerprii4id1.png" alt="Spain" width="20" height="20" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
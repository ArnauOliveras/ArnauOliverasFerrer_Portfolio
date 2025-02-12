import React, { useContext } from "react";
import { Context } from "../store/appContext";
import profileImage from "../../img/Foto_Arnau.jpg";
import "../../styles/index.css";
import { LanguageContext } from "../store/languageContext";

export const Home = (props) => {
	const { language, changeLanguage, translations } = useContext(LanguageContext);
	const { store, actions } = useContext(Context);

	return (
		<div className="pt-1 bg-home text-light" id="home">
			<div className="container mt-5 pt-1 pt-sm-4" >
				<div className="mt-5 row justify-content-center align-items-center">
					<div className="col-12 col-md-6 text-center text-md-start pt-5 pt-md-0">
						<img
							src={profileImage}
							alt="Profile"
							className="rounded-circle img-fluid"
							style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
						/>
					</div>

					<div className="col-12 col-md-6 text-center  pt-3 pt-md-0 ">
						<h2 className="mb-1">Arnau Oliveras Ferrer</h2>
						<p className="mb-1">{props.rol}</p>
						<p className="mb-0">Mataró, Barcelona</p>
						<div className="mt-2 d-flex flex-column flex-md-row justify-content-center align-items-center">
							<a
								href={props.cv}
								download="ArnauOliverasFerrer_CV.pdf"
								type="button"
								className="btn btn-outline-warning m-3"
							>
								{translations[language].downloadCV}
							</a>
							<a type="button" className="btn btn-outline-warning m-3" href="#contact">
								{translations[language].contact}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="fade-div-home-aboutme"></div>
		</div>

	);
};
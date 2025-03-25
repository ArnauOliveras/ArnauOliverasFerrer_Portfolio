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

					<div className="col-12 col-md-6 text-center pt-3 pt-md-0">
						<div className="d-flex justify-content-center">
							<div className="text-start  bg-home-individual ps-3 pt-3" style={{ width: "450px" }}>

								<h2 className="mb-1 ">{translations[language].introHome}</h2>
								<h1 className="mb-1">Arnau Oliveras Ferrer</h1>
								<h4 className="mb-1">{props.rol}</h4>
								<p className="mb-0">Mataró, Barcelona</p>

								<div className="mt-3">
									<div className="d-flex justify-content-start mt-3">
										<a href="https://www.linkedin.com/in/arnauoliveras/" className="mx-2" target="_blank" aria-label="LinkedIn">
											<i className="fa-brands fa-linkedin fa-2x text-primary"></i>
										</a>
										<a href="https://github.com/ArnauOliveras" className="mx-2" target="_blank" aria-label="GitHub">
											<i className="fa-brands fa-github fa-2x text-dark"></i>
										</a>
										<a href="https://arnau-oliveras.itch.io/" className="mx-2" target="_blank" aria-label="Itch.io">
											<i className="fa-brands fa-itch-io fa-2x text-danger"></i>
										</a>
									</div>
								</div>

								<div className="mt-1 d-flex flex-column flex-md-row justify-content-center align-items-center">
									<a
										href={props.cv}
										download="ArnauOliverasFerrer_CV.pdf"
										type="button"
										className="btn btn-outline-warning m-3"
									>
										{translations[language].downloadCV}
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div >

	);
};
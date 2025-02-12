import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Contact } from "./views/contact";
import { FullStack } from "./views/fullstack";
import { Videogames } from "./views/videogames";
import injectContext from "./store/appContext";
import { LanguageProvider } from "./store/languageContext";

import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<LanguageProvider>
						<Routes>
							<Route path="/" element={<FullStack />} />
							<Route path="/fullstack" element={<FullStack />} />
							<Route path="/videogames" element={<Videogames />} />
							<Route path="*" element={<FullStack />} />
						</Routes>
						<Contact />
						<Footer />
					</LanguageProvider>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

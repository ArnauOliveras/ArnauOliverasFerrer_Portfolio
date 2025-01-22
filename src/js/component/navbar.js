import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand navbar-light bg-light px-5">
			<h1>Navbar</h1>
		</nav>
	);
};
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-5">
			<h1>Hello World!</h1>
		</div>
	);
};
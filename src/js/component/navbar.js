import React from "react";
import { Link } from "react-router-dom";
import start_war from "../../img/start_war.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-betewen">
			<Link to="/">
				<span className="navbar-brand mx-5 h1" ><img src={start_war} style={{width: "80px"}}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5">Favorities</button>
				</Link>
			</div>
		</nav>
	);
};

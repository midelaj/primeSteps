import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Brand from "../components/brand/Brand.js";
import Category from "../components/category/Category.js";
import Footer from "../components/footer/Footer.js";
import Mail from "../components/mail/Mail.js";

export default function Home() {
	return (
		<div>
			<NavBar />
			<Brand />
			<Category />
			<Mail />
			<Footer />
		</div>
	);
}

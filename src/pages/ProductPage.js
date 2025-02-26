import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ProductCard from "../components/card/ProductCard.js";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Shoes from "../assets/Shoes.js";
import FilterBar from "../components/filterBar/FilterBar.js";

export default function ProductPage() {
	return (
		<div>
			<NavBar />

			<Container
				sx={{
					display: "flex",
					alignItems: "left",
					margin: "0px",
				}}
			>
				<Typography sx={{ color: "white", margin: "0px", fontWeight: "bold" }}>
					Product symbol
				</Typography>
			</Container>

			<FilterBar />

			<Container sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
				{Shoes.map((shoes) => (
					<ProductCard image={shoes} />
				))}
			</Container>

			<Footer />
		</div>
	);
}

import React from "react";
import BrandCard from "../card/BrandCard.js";
import BrandImage from "./assets/BrandImage.js";
import { styled } from "@mui/material";

const CustomBrandCard = styled("div")(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "center",

	[theme.breakpoints.down("sm")]: {
		flexWrap: "nowrap", // Prevent wrapping
		overflowX: "auto", // Enable horizontal scrolling
		scrollSnapType: "x mandatory", // Smooth snap effect
		paddingBottom: "10px",
	},
}));

export default function Brand() {
	return (
		<div>
			<CustomBrandCard>
				{BrandImage.map((brand, index) => (
					<BrandCard
						key={index}
						brandName={brand.name}
						brandLogo={brand.image}
					/>
				))}
			</CustomBrandCard>
		</div>
	);
}

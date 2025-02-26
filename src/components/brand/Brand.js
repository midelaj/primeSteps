import React from "react";
import BrandCard from "../card/BrandCard.js";
import BrandImage from "./assets/BrandImage.js";
import { styled } from "@mui/material";
import MainImage from "../../assets/mainImage.jpeg";
const CustomBrandCard = styled("div")(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "center",

	[theme.breakpoints.down("sm")]: {
		flexWrap: "nowrap",
		overflowX: "auto",
		scrollSnapType: "x mandatory",
		paddingBottom: "10px",
	},
}));

export default function Brand() {
	return (
		<div>
			<div>
				<img src={MainImage} alt="this is shoe" style={{ width: "100%" }} />
			</div>

			<CustomBrandCard>
				{BrandImage.map((brand) => (
					<BrandCard brandName={brand.name} brandLogo={brand.image} />
				))}
			</CustomBrandCard>
		</div>
	);
}

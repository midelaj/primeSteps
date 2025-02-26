import React from "react";
import { Box, styled } from "@mui/material";
import ShopForMen from "./assets/shopForMen.webp";
import Button from "@mui/material/Button";
import ShopForWomen from "./assets/shopForWomen.jpg";
import UsQuality from "./assets/usQuality.webp";

const shopCategory = [
	{ name: "Shop Men", backgroundImage: ShopForMen },
	{ name: "shop Women", backgroundImage: ShopForWomen },
	{ name: "US quality", backgroundImage: UsQuality },
];

const CategoryBox = styled(Box)(({ backgroundImage }) => ({
	width: "100%",
	height: "60vh",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundImage: `url(${backgroundImage})`,
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
export default function Category() {
	return (
		<div>
			{" "}
			<div>
				{shopCategory.map((category, index) => (
					<CategoryBox
						key={index}
						backgroundImage={category.backgroundImage}
						component="section"
					>
						<Button
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "Black",
								color: "white",
								borderRadius: "20px",
								alignItems: "center",
							}}
						>
							Shop Men
						</Button>
					</CategoryBox>
				))}
			</div>
		</div>
	);
}

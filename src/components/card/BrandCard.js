import React from "react";
import { CardContent, CardMedia, styled, Typography } from "@mui/material";
import { Card } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cardTheme = createTheme({
	palette: {
		primary: { main: "#000000" },
		secondary: { main: "#FFFFFF" },
	},
});

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.secondary.main,
	borderRadius: 0,
	width: "250px",
	minWidth: "250px",
}));

export default function BrandCard(props) {
	return (
		<ThemeProvider theme={cardTheme}>
			<StyledCard>
				<CardMedia
					component="img"
					height="200"
					jjj
					image={props.brandLogo}
					alt="green iguana"
				/>
				<CardContent sx={{ color: "white", display: "flex" }}>
					<Typography>
						{props.brandName}
						<ArrowForwardIcon
							sx={{ verticalAlign: "middle", ml: 0.5, fontSize: "medium" }}
						/>
					</Typography>
				</CardContent>
			</StyledCard>
		</ThemeProvider>
	);
}

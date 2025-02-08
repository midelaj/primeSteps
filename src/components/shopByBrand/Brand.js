import React from "react";
import { CardContent, CardMedia, styled, Typography } from "@mui/material";
import { Card } from "@mui/material";
import BrandImages from "./assets/BrandImage";
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
}));

export default function Brand() {
	return (
		<ThemeProvider theme={cardTheme}>
			<Card sx={{ maxWidth: 300 }}>
				<CardMedia
					component="img"
					height="140"
					image={BrandImages[0].image}
					alt="green iguana"
				/>
				<StyledCard>
					<Typography>
						{BrandImages[0].name}
						<ArrowForwardIcon
							sx={{ verticalAlign: "middle", ml: 1, fontSize: "medium" }}
						/>
					</Typography>
				</StyledCard>
			</Card>
		</ThemeProvider>
	);
}

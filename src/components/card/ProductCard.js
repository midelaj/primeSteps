import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ProductCard(props) {
	return (
		<Card
			sx={{
				maxWidth: 280,
				height: 380,
				borderRadius: "15px",
				color: "white",
				background: "black",
				marginTop: "10px",
				marginRight: "5px",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					borderRadius: "10px",
					overflow: "hidden",
					transition: "transform 0.3s ease-in-out",
					"&:hover img": {
						transform: "scale(1.1)",
					},
				}}
			>
				<CardMedia
					sx={{
						height: 300,
						width: 280,
						borderRadius: "10px",
						overflow: "hidden",
						transition: "transform 0.3s ease-in-out",
						"&:hover": {
							transform: "scale(1.1)",
						},
					}}
					image={props.image}
					title="green iguana"
				/>
			</Box>
			<CardContent
				sx={{
					marginTop: "5px",
					padding: "0px",
					display: "flex",
					alignItems: "left",
					color: "white",
					background: "black",
				}}
			>
				<Typography component="div">Nike shoe</Typography>
			</CardContent>

			<CardActions
				sx={{
					color: "white",
					background: "black",
				}}
			>
				<Button size="small" sx={{ color: "white" }}>
					Share
				</Button>

				<Button size="small" sx={{ color: "white" }}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function FilterBar() {
	return (
		<Container sx={{ borderColor: "white", width: "100%", display: "flex" }}>
			<Box sx={{ display: "flex", alignItems: "start", width: "50%" }}>
				<Typography sx={{ color: "white" }}>Filter</Typography>
				<Typography sx={{ color: "white" }}>Availability</Typography>
				<Typography sx={{ color: "white" }}>Hey this me</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "right",
					width: "50%",
				}}
			>
				<Typography sx={{ color: "white" }}>Hey this me</Typography>
				<Typography sx={{ color: "white" }}>Hey this me</Typography>
				<Typography sx={{ color: "white" }}>Hey this me</Typography>
			</Box>
		</Container>
	);
}

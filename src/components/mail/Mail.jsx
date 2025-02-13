import React from "react";
import {
	Box,
	Container,
	IconButton,
	Input,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Mail() {
	return (
		<Container>
			<Container
				sx={{
					backgroundColor: "black",
					color: "white",
					textAlign: "center",
					py: 2,
					height: "60vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box>
					<Typography
						variant="h4"
						h2
						sx={{ marginBottom: "10px", color: "white", fontWeight: "bold" }}
					>
						Subscribe to our emails
					</Typography>
				</Box>
				<TextField
					placeholder="Email"
					variant="outlined"
					sx={{
						width: "100%", // Adjust width as needed
						maxWidth: "400px", // Limit width
						backgroundColor: "black",
						borderRadius: "40px",
						"& .MuiOutlinedInput-root": {
							color: "white",
							fontSize: "18px",
							borderRadius: "40px",
							paddingRight: "10px",
							"& fieldset": {
								borderColor: "#7a7a7a", // Border color
							},
							"&:hover fieldset": {
								borderColor: "#fff",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#fff",
							},
						},
						input: {
							padding: "12px 20px",
						},
					}}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton sx={{ color: "#7a7a7a" }}>
										<ArrowForwardIcon />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
				<Box
					sx={{
						marginTop: "20px",
						color: "#a39e95",
						display: "flex",
						gap: "40px",
					}}
				>
					<Typography>About Us</Typography>
					<Typography>Track Order</Typography>
				</Box>
			</Container>
		</Container>
	);
}

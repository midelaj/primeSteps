import React from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<Container
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Paper
				sx={{
					width: "30%",
					height: "50%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography>SignIn </Typography>
				<TextField
					required
					id="standard-required"
					defaultValue="Hello World"
					variant="standard"
				/>
				<TextField
					required
					id="standard-required"
					defaultValue="Hello World"
					variant="standard"
				/>
				<Button sx={{ marginTop: "10px" }} variant="contained">
					Log In
				</Button>

				<Typography>
					{" "}
					Don't have an account? <Link to="/signUp">Sign Up</Link>
				</Typography>
			</Paper>
		</Container>
	);
}

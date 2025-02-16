import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(() => ({
	backgroundColor: "#d1cec7",
	display: "flex",
	color: "white",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	width: "50%",
	height: "70%",
}));

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const onPassword = () => {
		setShowPassword(!showPassword);
	};
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
			<StyledPaper>
				<Typography>Sign Up </Typography>
				<TextField
					required
					id="standard-required"
					defaultValue="First Name"
					variant="standard"
				/>
				<TextField
					required
					id="standard-required"
					defaultValue="Second Name"
					variant="standard"
				/>
				<TextField
					required
					id="standard-required"
					defaultValue="Email"
					variant="standard"
				/>

				<TextField
					required
					id="standard-password-input"
					label="password"
					variant="standard"
					type={showPassword ? "text" : "password"}
					InputAdornment={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={onPassword}
									edge="end"
									sx={{ color: "black" }}
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<TextField
					required
					id="standard-password-input"
					label="password"
					variant="standard"
					type={showPassword ? "text" : "password"}
					InputAdornment={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={onPassword} edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>{" "}
				<Button sx={{ marginTop: "10px" }} variant="contained">
					Log In
				</Button>

				<Typography>
					{" "}
					Don't have an account? <Link to="/signUp">Sign Up</Link>
				</Typography>
			</StyledPaper>
		</Container>
	);
}

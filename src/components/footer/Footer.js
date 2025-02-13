import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "black",
				color: "white",
				textAlign: "center",
				py: 2,
				height: "13vh",
				borderTop: ".6px solid #4a4844",
			}}
		>
			<Container>
				<Typography variant="body2" sx={{ mt: 5, fontSize: "10px" }}>
					© 2025, Snapkicks{" "}
					<Link href="#" color="inherit" underline="hover">
						{" "}
						Powered by PriMidelaj
					</Link>{" "}
					·{" "}
					<Link href="#" color="inherit" underline="hover">
						Refund policy
					</Link>{" "}
					·{" "}
					<Link href="#" color="inherit" underline="hover">
						Privacy policy
					</Link>{" "}
					·{" "}
					<Link href="#" color="inherit" underline="hover">
						Terms of service
					</Link>{" "}
					·{" "}
					<Link href="#" color="inherit" underline="hover">
						Shipping policy
					</Link>{" "}
					·{" "}
					<Link href="#" color="inherit" underline="hover">
						Contact information
					</Link>
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;

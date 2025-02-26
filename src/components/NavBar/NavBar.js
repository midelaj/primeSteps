import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ React Router for navigation

const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: " #000000",
				},
			},
		},
	},
});
const StyledIconButton = styled(IconButton)(({ theme }) => ({
	padding: " 16px",
	"& svg": {
		fontSize: "20px",
		marginRight: "4px",
		color: "#e8eaf6",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "8px",
		"& svg": {
			fontSize: "20px",
			marginRight: "4px",
		},
	},
}));
export default function MenuAppBar() {
	const [menu, setMenu] = useState(null);
	const open = Boolean(menu);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setMenu(event.currentTarget);
	};
	const handleClose = () => {
		setMenu(null);
	};
	const handleLogin = () => {
		handleClose();
		navigate("/login");
	};
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h5"
								component="div"
								sx={{ flexGrow: 1, fontWeight: "bold" }}
							>
								Prime Steps
							</Typography>
							<div>
								<StyledIconButton>
									<LocalMallOutlinedIcon sx={{ mr: 2 }} />
									<SearchSharpIcon sx={{ mr: 2 }} />
									<Button onClick={handleClick}>
										<AccountCircle />
									</Button>
									<Menu
										id="basic-menu"
										anchorEl={menu}
										open={open}
										onClose={handleClose}
									>
										<MenuItem onClick={handleLogin}>Login</MenuItem>
										<MenuItem onClick={handleClose}>Logout</MenuItem>
									</Menu>{" "}
								</StyledIconButton>
							</div>
						</Toolbar>
					</AppBar>
				</Box>
			</ThemeProvider>
		</div>
	);
}

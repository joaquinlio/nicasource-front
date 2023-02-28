import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MovieIcon from "@mui/icons-material/Movie";
import UserAvatar from "./UserAvatar";
import { Toolbar, Box, Title } from "./NavBar.styles";
//import { AppLink } from '../AppLink'

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Box>
          <Title variant="h6">Videos Creator Platform</Title>
        </Box>
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
}

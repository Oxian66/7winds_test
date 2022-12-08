import React from "react";
import {
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.style.scss";

export default function Header():React.ReactElement {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#202124",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <IconButton>
              <ReplyOutlinedIcon />
            </IconButton>
            <Typography variant="h6">Просмотр</Typography>
            <Typography variant="h6">Управление</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

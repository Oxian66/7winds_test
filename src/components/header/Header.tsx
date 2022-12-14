import React, { useState, SyntheticEvent }from 'react';
import {
  IconButton,
  AppBar,
  Toolbar,
  Tab,
  Tabs, 
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.style.scss';

export default function Header():React.ReactElement {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#202124',
      },
    },
  });

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    marginLeft: "25px",
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <ReplyOutlinedIcon />
            </IconButton>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              textColor="inherit"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "white",
                },
              }}
            >
              <Tab
                label="Просмотр"
                sx={{color: "white", fontSize: '14px'}}
                {...a11yProps(0)}
              />
              <Tab
                label="Управление"
                sx={{color: "white", fontSize: '14px'}}
                {...a11yProps(1)}
              />
            </Tabs>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

import React from 'react';
import './App.style.scss';
import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import {  Stack, Divider, Box } from '@mui/material';
import TableComponent from './components/table/TableComponent';

function App() {
  return (
    <Box sx={{height: '100%'}}>
      <div className="container_app">
        <Header />
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ background: "#A1A1AA" }}
        />
        <Stack direction="row">
          <SideBar />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ background: "#A1A1AA" }}
          />
          <TableComponent />
        </Stack>
      </div>
    </Box>
  );
}

export default App;

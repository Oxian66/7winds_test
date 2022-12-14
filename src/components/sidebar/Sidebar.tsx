import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from "@mui/icons-material/Dashboard";

import './Sidebar.style.scss';

export default function SideBar(): React.ReactElement {
  return (
    <Box sx={{ height: "100vh", width: "240px", bgcolor: "#27272A" }}>
      <aside className="sidebar">
        <Accordion
          sx={{
            borderRadius: 0,
            backgroundColor: "#27272A",
            color: "#A1A1AA",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="sidebar-content"
            id="sidebar-header"
            sx={{ mB: "0" }}
          >
            <Typography className="typography">Название проекта</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="typography">Абриевиатура</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ background: "#A1A1AA" }}
        />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>По проекту</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>Обьекты</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>РД</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>МТО</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>СМР</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>График</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>МиМ</Typography>
            </ListItemButton>
          </ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <Typography sx={{ color: "white" }}>Обьекты</Typography>
          </ListItemButton>
        </List>
      </aside>
    </Box>
  );
}

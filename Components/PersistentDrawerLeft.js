"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Navbar from "./Navbar";
import { useStateContext } from "@/context/StateContext";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Main from "./Main";

const drawerWidth = 300;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const { drawerOpen,setDrawerOpen } =useStateContext();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={drawerOpen}>
        <Navbar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
       <Sidebar />
      </Drawer>
      <div className="flex flex-col items-start justify-between absolute top-[100px] w-full">
        <Hero />
        <Main />
      </div>
    </Box>
  );
}

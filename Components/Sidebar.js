"use client";

import React,{useState} from "react";
import Search from "@/public/assets/icons/Search.svg";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { sidebar_comp } from "@/utils/Constants";

import { styled, useTheme } from "@mui/material/styles";
import { useStateContext } from "@/context/StateContext";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Avatar,FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { Arrow, Arrow2 } from "@/public/assets";
import { Language } from "@/utils/Constants";




const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));


const Sidebar = () => {
  const { drawerOpen, setDrawerOpen,setCountry,country } = useStateContext();
  const [hover, setHover] = useState(0);
  


  return (
    <div className="bg-[#15132B] overflow-x: hidden;h-screen">
      <DrawerHeader>
        <div className="flex justify-center items-center gap-5 mt-6 mr-10 h-[75px]">
          <h1 className="text-white font-sans text-lg">weframtech</h1>
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ color: "#E9ECFF" }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </DrawerHeader>
      <Divider />

      {/*  */}
      <div className="flex lg:hidden flex-col justify-center items-start ml-[40px] mt-[50px] gap-6">
      <div className="flex justify-start items-center  w-[200px] h-[50px] bg-[#211A75] rounded-full gap-4 text-[#AAAAAA]">
        <Image alt="search" src={Search} height={20} width={20} className=" ml-[10px]" />
        <input
          className="outline-0 border-none bg-[#211A75] w-[100px] hover:outline-0"
          placeholder="Search Here ..."
        />
      </div>
      <div className="flex">
        <FormControl>
          <div className="">
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: "9999px",
                width: 200,
                height: 60,
                backgroundColor: "#211A75",
                color: "white",
              }}
            >
              <MenuItem value="">
                <em>Language</em>
              </MenuItem>
              {Language.map(({ language, id, url },index) => (
                <MenuItem value={language} key={index}>
                  <div
                    key={id}
                    className="flex justify-center items-center gap-2 "
                  >
                    <Avatar alt={language} src={url} />

                    <span>{language}</span>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </div>
        </FormControl>
      </div>
      </div>
      {/*  */}
      <Divider />
      <div className="flex flex-col gap-[100px]">
      <div className="flex flex-col items-start justify-center gap-5 mt-10 max-w-[299px] overflow-hidden">
        <h3 className="text-white font-sans  pl-[20px] text-sm">MAIN MENU</h3>
        <List>
          {sidebar_comp.map(({ name, id, url,url_hover },index) => (
            <ListItem key={index} disablePadding>
              <div
              key={id}
                className="flex w-[300px] items-center h-[50px] gap-10 text-[#464366] hover:text-[#6418C3] hover:cursor-pointer
            hover:shadow-lg shadow-black-800 hover:border-b-4 border-black text-sm pl-[20px]"
            onClick={() => setDrawerOpen(!drawerOpen)}
            onMouseEnter={()=>setHover(id)}
            
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Image key={id} src={id==hover ? url_hover : url}  alt={name} />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
<div className="flex justify-center items-center">
      <div
        className="flex flex-col items-start justify-center p-10 max-w-[245px] h-[203px] bg-[#0D84DC] rounded-[32px] gap-6 mb-10
      "
      >
        <Image src={Arrow} alt="arrow" />
        <h2 className="flex flex-wrap text-white">Increase your work with kanban</h2>
        <Image src={Arrow2} alt="arrow2" />
      </div>
      </div>
    </div>
<Divider />
    {/*  */}
    <div
        className="flex justify-center items-center gap-5 cursor-pointer pb-10 text-white"
      >
        <div className="rounded-lg bg-[#C4C4C4] w-[57px] h-[57px]"></div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2>Instructor Day</h2>
          <p>Super Admin</p>
        </div>
        </div>
    {/*  */}
    </div>
  );
};

export default Sidebar;

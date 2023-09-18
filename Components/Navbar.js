"use client";

import React, { useState } from "react";
import Search from "@/public/assets/icons/Search.svg";
import Image from "next/image";
import { Folder, Notification, Activities, Check } from "@/public/assets";
import { useStateContext } from "@/context/StateContext";
import Divider from '@mui/material/Divider';

import {
  Avatar,
  FormControl,
  FormHelperText,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import Hamburger from "@/public/assets/icons/Hamburger.svg";

import { Language } from "@/utils/Constants";



const Navbar = () => {
  const [click, setClick] = useState(false);

  const { drawerOpen, setDrawerOpen, setCountry, country } = useStateContext();

  return (

    <div className="flex bg-[#15132B] min-w-full h-[100px] items-center justify-between pl-5 pr-5 lg:p-0 lg:justify-evenly">
      <div className="flex justify-center items-center gap-10">
        <h1 className="text-white font-sans font-bold text-sm sm:text-2xl">weframtech</h1>
        <Image
          src={Hamburger}
          alt="hamburger"
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="cursor-pointer"
        />
      </div>
      <div className=" hidden lg:flex justify-start cursor-pointer items-center  w-[300px] xl:w-[400px] h-[50px] bg-[#211A75] rounded-full gap-4 text-[#AAAAAA]">
        <Image alt="search" src={Search} height={24} width={24} className=" ml-[50px]" />
        <input
          className="outline-0 border-none bg-[#211A75] w-[200px] hover:outline-0 text-sm "
          placeholder="Search Here ..."
        />
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <p className="text-[#6418C3] border-b-2 border-[#6418C3] hover:cursor-pointer text-sm ">
          OTHER MENUS
        </p>
      </div>

      <div className="hidden 2xl:flex justify-center items-center">
        <Image
          alt="icons"
          src={Notification}
          className="h-h-[70px] w-[70px]  cursor-pointer"
        />
        <Image
          alt="icons"
          src={Activities}
          className="h-[70px] w-[70px]  cursor-pointer"
        />
        <Image
          alt="icons"
          src={Check}
          className="h-[70px] w-[70px] cursor-pointer"
        />
        <Image
          alt="icons"
          src={Folder}
          className="h-[70px] w-[70px]  cursor-pointer"
        />
      </div>

      <div className="hidden lg:flex">
        <FormControl>
          <div className="">
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: "9999px",
                width: 150,
                height: 60,
                backgroundColor: "#211A75",
                color: "white",
                border:'none',
                outline:'none',
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
      <div
        className="flex justify-evenly items-center gap-5 cursor-pointer"
        onClick={() => setClick(!click)}
      >
      <Divider orientation="vertical" flexItem />
        <div className="rounded-lg bg-[#C4C4C4] w-[57px] h-[57px]"></div>
        <div className="flex flex-col justify-center items-start gap-1">
          <h2 className="text-bold xs:text-md text-xs">Instructor Day</h2>
          <p className="text-[#7879F1] text-xs font-thin">Super Admin</p>
        </div>
        <div className="">
          <Image
            src="/assets/icons/SideArow.svg"
            alt="sideArrow"
            width={10}
            height={10}
            className="block cursor-pointer"
          />
          {click && (
            <div className="absolute flex flex-col justify-center items-center h-fit w-fit p-4 top-20 right-10 bg-[#211A75] text-white rounded-lg cursor-pointer gap-6">
              <h2 onClick={() => setClick(!click)}>Profile</h2>
              <h2 onClick={() => setClick(!click)}>Account</h2>
              <h2 onClick={() => setClick(!click)}>Logout</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

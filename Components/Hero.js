import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Slider } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    brown: defaultTheme.palette.augmentColor({
      color: {
        main: "#6418C3",
      },
      name: "brown",
    }),
    sky: defaultTheme.palette.augmentColor({
      color: {
        main: "#7879F1",
      },
      name: "sky",
    }),
  },
});

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-start justify-normal sm:max-w-[98vw] h-fit m-5 p-10 rounded-lg bg-[#15132B] text-white gap-10">
        <ArrowCircleLeftIcon
          sx={{ height: 38, width: 38 }}
          className="hidden xl:block"
        />
        <div className="flex flex-col items-start justify-evenly gap-10 w-full">

          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col justify-center items-start gap-5">
              <h1 className="text-white font-bold text-lg">
                School November Tasks
              </h1>
              <p className="text-[#A5A5A5] text-xs font-thin">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
            <div className="flex justify-center items-start gap-10 ">
              <div className="hidden lg:flex flex-col justify-center items-start gap-5">
                <h2 className="text-white font-bold text-lg">
                  Centered Martial Arts
                </h2>
                <p className="text-[#A5A5A5] text-xs font-thin">Sunnyvale,Ca</p>
              </div>
              <Image
                src="/assets/icons/Client.svg"
                alt="client"
                height={68}
                width={68}
                className="hidden lg:flex"
              />
              <Image
                src="/assets/icons/Icvert.svg"
                alt="client"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-start items-start gap-5 w-full flex-wrap">
            <div className="flex justify-start items-start flex-wrap gap-5 w-full">
              <Image
                alt="icon"
                src="/assets/icons/People.svg"
                width={168}
                height={40}
              />
              <Button
                variant="contained"
                disableRipple
                color="brown"
                className="bg-[#6418C3] flex gap-2"
              >
                <Image
                  alt="friend"
                  src="/assets/icons/Friend.svg"
                  height={24}
                  width={24}
                />
                <span>Invite People</span>
              </Button>
              <Button variant="outlined" disableRipple>
                Private
              </Button>
              <Button
                variant="contained"
                disableRipple
                color="sky"
                className="bg-[#7879F1]"
              >
                Edit
              </Button>
              <Button variant="outlined" className="flex gap-2" disableRipple>
                <Image
                  alt="chat"
                  src="/assets/icons/Chat2.svg"
                  height={24}
                  width={24}
                />
                <span>45 comments</span>
              </Button>
              </div>
              <p className="text-sm flex justify-center items-center gap-5 w-full">Total Progress 60%
              <Slider value={60} color="brown" size="medium" />
              </p>
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Hero;

import { Slider } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { Main_Container } from "@/utils/Constants";


const pink="#FF4A55";

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
    yellow: defaultTheme.palette.augmentColor({
      color: {
        main: "#FFAB2D",
      },
      name: "yellow",
    }),
    pink: defaultTheme.palette.augmentColor({
      color: {
        main: "#E328AF",
      },
      name: "pink",
    }),
    green: defaultTheme.palette.augmentColor({
      color: {
        main: "#38E25D",
      },
      name: "green",
    }),
    orange: defaultTheme.palette.augmentColor({
      color: {
        main: "#FF4A55",
      },
      name: "orange",
    }),
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="mt-2 p-10 flex flex-wrap justify-evenly items-start gap-6">
        {Main_Container.map(({head,data},index)=>(

     
        <div key={index} className="flex flex-col w-[300px] gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold">{head}</h1>
            <Image
              src="/assets/icons/Add.svg"
              alt="add"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </div>
          {data.length > 0 ? ( data.map(({id,headText,Content,color,hash_color})=>
     
           (

          
          <div className="flex flex-col gap-2 bg-[#211A75] rounded-lg p-5" key={id}>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div style={{backgroundColor:`${hash_color}`}} className={`rounded-full w-[10px] h-[10px]`} ></div>
                <p style={{color:`${hash_color}`}}>{headText}</p>
              </div>
              <Image
                src="/assets/icons/Sidedots.svg"
                alt="sidedots"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-white font-semibold text-sm">
                {Content}
              </p>
              <Slider value={60} color={color} />
            </div>
            <div className="flex items-start justify-between">
              <div className="">
                <Image
                  src="/assets/icons/People.svg"
                  width={107}
                  height={32}
                  alt="people"
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <Image
                  src="/assets/icons/Clock.svg"
                  alt="clock"
                  height={16}
                  width={16}
                />
                <p className="text-[#A5A5A5] text-xs font-thin">Due in 4 days</p>
              </div>
            </div>
          </div>
          ))) : ( 
            <div className="flex p-5 gap-2 bg-[#211A75] rounded-lg w-[300px] h-[100px]">
                <div className="flex w-full justify-center items-center bg-[#15132B] border-dashed border-2 border-[rgb(176,171,171)] text-[rgb(33,26,117)] font-bold rounded-lg">Move card Here</div>
            </div>
          )}
        </div>
    ))}
      </div>
    </ThemeProvider>
  );
};

export default Main;

"use client";

import React, { createContext, useContext, useState } from "react";


const Context = createContext();

export const StateContext = ({ children }) => {
  
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [country, setCountry] = useState("");

  return (
    <Context.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        country,
        setCountry
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

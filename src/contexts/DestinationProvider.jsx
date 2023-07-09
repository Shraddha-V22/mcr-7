import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { data } from "../data/data";

const DestinationsContext = createContext();

export default function DestinationProvider({ children }) {
  return (
    <DestinationsContext.Provider value={{ placeData: data }}>
      {children}
    </DestinationsContext.Provider>
  );
}

export const usePlaces = () => useContext(DestinationsContext);

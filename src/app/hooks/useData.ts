"use client";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";


// Custom hook to use data context
export const useData = () => useContext(DataContext);

import { createContext } from "react";

export const emptyItem = { 
  name: "",
  price: 0,
  description: "",
  url: "",
}

export const SelectedItemContext = createContext(emptyItem);
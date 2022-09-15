import { useContext } from "react";
import { createContext } from "react";

const DeleteContext = createContext();

export const DeleteProvider = ({ children, value }) => {
  return (
    <DeleteContext.Provider value={value}>{children}</DeleteContext.Provider>
  );
};

export const useDelete = () => useContext(DeleteContext);

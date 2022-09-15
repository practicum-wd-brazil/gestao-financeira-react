import { useContext } from "react";
import { createContext } from "react";

const UpdateContext = createContext();

export const UpdateProvider = ({ children, value }) => {
  return (
    <UpdateContext.Provider value={value}>{children}</UpdateContext.Provider>
  );
};

export const useUpdate = () => useContext(UpdateContext);

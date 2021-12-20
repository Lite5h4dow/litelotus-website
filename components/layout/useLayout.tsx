import React, { useContext, useEffect} from "react";
import { AppContext } from "~/lib/context/appContext.ts";
import useTheme from "~/lib/hooks/useTheme.tsx";

const useLayout = () => {
  const ctx = useContext(AppContext);
  const {theme: darkModeStyle} = useTheme();

  const toggleDarkMode = () => {
    ctx?.dispatcher((state) => ({ ...state, darkMode: !state.darkMode }));
  };

  const setDarkMode = (target:boolean)=>{
    ctx?.dispatcher((state) => ({...state, darkMode: target}))
  }

  return { darkMode: ctx?.state.darkMode, toggleDarkMode, darkModeStyle, setDarkMode };
};

export default useLayout;

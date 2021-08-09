import React, { useContext, useEffect} from "react";
import { AppContext } from "~/lib/context/appContext.ts";
import useTheme from "~/lib/hooks/useTheme.tsx";

const useLayout = () => {
  const ctx = useContext(AppContext);
  const {theme: darkModeStyle} = useTheme();

  const toggleDarkMode = () => {
    ctx?.dispatcher((state) => { return {...state, darkMode: !state.darkMode}});
  };

  return { darkMode: ctx?.state.darkMode, toggleDarkMode, darkModeStyle };
};

export default useLayout;

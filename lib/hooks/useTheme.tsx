import {useContext} from "react"
import {AppContext} from "~/lib/context/appContext.ts"

const useTheme = () => {
  const context = useContext(AppContext);
  const theme = context?.state.darkMode?"dark-theme":"light-theme";
  const toggleTheme = () => {
    context?.dispatcher(state => ({...state, darkMode:!state.darkMode}));
  };
  return { theme, toggleTheme }
}

export default useTheme
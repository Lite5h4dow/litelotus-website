import {useContext} from "react"
import {AppContext} from "~/lib/context/appContext.ts"

const useTheme = () => {
  const context = useContext(AppContext)
  return {theme: context?.state.darkMode?"dark-theme":"light-theme"}
}

export default useTheme
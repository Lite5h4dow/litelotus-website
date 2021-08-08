import React from "react";
import useLayout from "./useLayout.tsx";
import Button from "../button/button.tsx"
import Logo from "~/components/logo.tsx";
import Divider from "~/components/divider/divider.tsx"
import "./layout.css"

const Layout = ({ children }: { children: JSX.Element | Array<JSX.Element> }): JSX.Element => {
  const {darkMode, toggleDarkMode, darkModeStyle} = useLayout();
  return (<>
  <div className="header">
    <div className={`mini-menu ${darkModeStyle}`} >
      <Button >hello</Button>
      <Divider/>
      <Button icon={<Logo size={25}/>} >Shadowlabs</Button>
    </div>
    <div className={`mini-menu transparent ${darkModeStyle}`}>
      <Button onClick={()=>{toggleDarkMode()}} > Hey there guys </Button>
      <Button>Howdy Folks!</Button>
      <Button>Really Goin Places!</Button>
    </div>
  </div>
  {children}
  </>);
};
export default Layout;

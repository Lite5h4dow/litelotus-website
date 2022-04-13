import React from "react";
import useLayout from "./useLayout.tsx";
import Logo from "~/components/logo.tsx";
import { Button, Divider, Dropdown } from "components";
import "./layout.css";

export const Layout = (
  { children }: { children: JSX.Element | Array<JSX.Element> },
): JSX.Element => {
  const { darkMode, toggleDarkMode, darkModeStyle, setDarkMode } = useLayout();
  const dropdownItems = [
    <Button>Shadowlabs</Button>,
    <Button>LiteLotus</Button>,
  ];
  return (
    <div className={`canvas ${darkModeStyle}`}>
      <div className="header">
        <div className={`mini-menu ${darkModeStyle}`}>
          <Dropdown items={dropdownItems}>Sites</Dropdown>
          <Divider />
          <Button href="/" icon={<Logo size={25} />}>Shadowlabs</Button>
        </div>
        <div className={`mini-menu button-menu transparent ${darkModeStyle}`}>
          <Button
            onClick={() => {
              toggleDarkMode();
            }}
          >
            Hey there guys
          </Button>
          <Button>Howdy Folks!</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

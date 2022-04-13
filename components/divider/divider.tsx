import React from "react";
import "./divider.css";
import useTheme from "~/lib/hooks/useTheme.tsx";

export const Divider = () => {
  const { theme } = useTheme();

  return <div className={`divider ${theme}`}></div>;
};

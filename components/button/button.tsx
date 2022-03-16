import React from "react"
import useTheme from "~/lib/hooks/useTheme.tsx"
import "./button.css"

interface IButton {
  onClick?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  transparent?: boolean,
  centered?: boolean,
  icon?: JSX.Element,
  className?: string,
  children?: string | JSX.Element | Array<JSX.Element>
  href?:string
}

export const Button = (props: IButton) => {
  const {theme} = useTheme()

  return (
    <button {...props} className={`button ${theme} ${props.className ? props.className : ""} ${props.transparent?"transparent":""} ${props.centered?"centered":""}`.trim()}>
      {props.icon?props.icon:null}
      {typeof props.children === "string"? <p>{props.children}</p>: props.children}
    </button>
  );
};


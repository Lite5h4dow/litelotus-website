import React, {useState} from "react";
import {Button} from "components";
import useTheme from "~/lib/hooks/useTheme.tsx";
import "./dropdown.css"

export const Dropdown = (props:any) => {
  const {items} = props;

  const [show, setShow] = useState(false);
  const {theme} = useTheme();

  return(
    <div className="dropdown-container">
      <Button {...props} 
        onFocus={()=>{
          props.onFocus && props.onFocus();
          setShow(true);
        }} 
        onBlur={()=>{
          props.onBlur && props.onBlur();
          setShow(false);
        }}/>
      <div className={`dropdown ${show?"show":""} ${theme}`}>
        {items.map((item:JSX.Element, index:number)=> <div key={index}>{item}</div>)}
      </div>      
    </div>
  );
};

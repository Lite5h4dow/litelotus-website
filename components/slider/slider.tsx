import React from "react"
import "./slider.css"

const Slider = ({onChange, value}:{onChange: ()=>{}, value: boolean}):JSX.Element =>{
  return(
    <>
      <input type="checkbox" id="switch" checked={value} onChange={onChange}/>
      <label htmlFor="switch">
      </label>
    </>
  )
}

export default Slider

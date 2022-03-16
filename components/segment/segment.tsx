import React from 'react'
import "./segment.css"

export function Segment({ children }:{children: JSX.Element|JSX.Element[]}){

  return(
    <div className="segment">
      {children}
    </div>
  )
}

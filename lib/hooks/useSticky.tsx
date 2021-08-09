import {useEffect, createRef, useState} from "react"

const useSticky = () => {
  const [sticky, setSticky] = useState(false);

  const elementRef = createRef();

  const handleScroll = (event:any) => {
    const currentScroll = window.scrollY;
    console.log(`scrolled to: ${currentScroll}`, event);
    console.log(elementRef.current)
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll );
    };
  });

  return {elementRef, sticky}
}

export default useSticky
import {useEffect} from "react";

function MouseTracker({setMouseX,setMouseY}){

  function handleMouseEvent(e){
    setMouseX(getX(e.clientX));
    setMouseY(getY(e.clientY));
  }

  useEffect(()=>{
    window.addEventListener("mousemove",handleMouseEvent);
    return () => {
      window.removeEventListener("mousemove",handleMouseEvent);
    }
  },)

  function getX(clientX) {
    if ((clientX * 100 / window.innerWidth) < 20) {
      return 20 + "%";
    } else if ((clientX * 100 / window.innerWidth) > 80) {
      return 80 + "%";
    } else
    {
      return clientX * 100 / window.innerWidth + '%';
    }
  }

  function getY(clientY) {
    if ((clientY * 100 / window.innerHeight) < 20) {
      return 20 + "%";
    } else if ((clientY * 100 / window.innerHeight) > 80) {
      return 80 + "%";
    } else
    {
      return clientY * 100 / window.innerHeight + '%';
    }
  }

  return null;
}

  export default MouseTracker;
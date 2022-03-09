import React, { Children, useRef } from "react";
import Box from "@mui/material/Box";
// import useDraggable from "useDraggable";
//import "./Componets/style.css";

const DraggableCard = () =>{
  const cardRef = useRef(null);
  // useDraggable(cardRef);

  return (<div className="card" ref={cardRef} >
    {Children}
    </div>)
    }
    
    export default  function Save() {
  return (
    <div className="container">

      <DraggableCard>Card1</DraggableCard >
      </div>)
}


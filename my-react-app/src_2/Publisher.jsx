import React, { useState } from "react";
import emitter from "./emitter";

function Publisher (){

    const [text,setText]=useState("");
  
    const handleChange=(event)=>{
      setText(event.target.value);
    };
  
    const handleClick=()=>{
      emitter.emit ('update',text);
    };
  
    return(
      <>
        <h2>Publisher</h2>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleClick}>Publish data</button>
      </>
    )
  };

  export default Publisher;
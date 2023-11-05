import React, { useState } from "react";
import "./Hello.css";

const Hello = () => {
  const [text, setText] = useState("red");
 const [show,setShow]=useState(false);

  const changeme = () => {
    setText(text === "red" ? "#009933" : "red");
  };

  

  return (
    <div className="main">
      

      <div className="hello">
        <h1 style={{ color: text }} onClick={changeme}>
          Hi Hasi
        </h1>
        <button onClick={()=>setShow(true)}>Click me</button>
        {show&&
          <h1 style={{ color: text }} onClick={changeme}>hii..Am your buddy Sana </h1>
        }
        
      </div>
     

      
    </div>
  );
};

export default Hello;

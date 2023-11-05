import React, { useState } from "react";
import "./Hello.css";

const Hello = () => {
  const [text, setText] = useState("red");
  const [another,setAnother]=useState("green")

  const changeme = () => {
    setText(text === "red" ? "#009933" : "red");
  };

  const changeu=()=>{
    setAnother(another === "green" ? "#cccccc" : "green");
  }

  return (
    <div className="main">
      

      <div className="hello">
        <h1 style={{ color: text }} onClick={changeme}>
          Hi Hasi
        </h1>
      </div>
      <div className="hello">
        <h1 style={{ color: another }} onClick={changeu}>
          Hi Hasi
        </h1>
      </div>

      <div className="hello">
        <h1 style={{ color: text }} onClick={changeme}>
          Hi Hasi
        </h1>
      </div>
    </div>
  );
};

export default Hello;

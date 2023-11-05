import { useState } from "react";
import BmiList from "./components/BmiList/BmiList";
import BmiScore from "./components/BmiScore/BmiScore";
import Bodymass from "./components/Bodymass/Bodymass";
import Forms from "./components/Forms/Forms";

import Hello from "./components/Hello";
import "./index.css";


function App() {
  const[show,setShow]=useState(false)
  const [changeWeight,setChangeWeight]=useState({wit:"", type:""})
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    OverWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (w, h) => {
    let result = calBmi(w, h);
    setBmi(result);
    let bType = weightType(result);
    setBmiType(bType);
    console.log(w, h);

    const range={
      underWeight: { low: calWeight(18.5,h) },
    normal: { low: calWeight(18.5,h), high: calWeight(24.9,h) },
    OverWeight: { low: calWeight(25,h), high: calWeight(29.9,h) },
    obesityOne: { low: calWeight(30,h), high: calWeight(34.9,h) },
    obesityTwo: { low: calWeight(35,h), high: calWeight(39.9,h) },
    obesityThree: { high: calWeight(40,h) },
    };
    setBmiRange(range);
    setChangeWeight(weightChange(result,w,range));
    setShow(true);
  };

  const calBmi = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };

  // this is function without return

  const calWeight = (result, h) => (result * h * h).toFixed(2);

  const weightChange=(result,w,range)=>{
    let changeObj;
    if(result>24.9){
      changeObj={
        wit:(w-range.normal.high).toFixed(2),
        type:"positive"

      };
      return changeObj;
    }
    else if(result<18.5){
      changeObj={
        wit:(range.normal.low-w).toFixed(2),
        type:"negative",
      };
      return changeObj;
    }else{
      changeObj={wit:0,type:"normal"};
      return changeObj;
    }
  }

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 39.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class 1";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class 2";
    } else if (bmi > 39.9) {
      return "Obesity Class 3";
    }
  };

  return (
    <>
      <Hello/>
      {/* <Bodymass /> */}
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Forms getData={onFormSub} />
        </div>
        {show && (
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <BmiScore bmino={bmi} bmiName={bmiType}  changeWeight={changeWeight}/>
          </div>
          <div className="col-12 col-sm-6">
            <BmiList range={bmiRange} bmi={bmi}/>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default App;

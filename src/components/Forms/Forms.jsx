import { useState } from "react";

const Forms = ({getData}) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    // This is prevent default refreshing of out page when submitting
    e.preventDefault();
    // NaN: is Not a number
    if (isNaN(weight) || isNaN(height)) {
      
      setAlert(true);
    } else {
      getData(weight,height)
      setAlert(false);
      
    }
  };

  // This is one way of condition checking


  // let alertMessage;
  // if (alert) {
  //   alertMessage = (
  //     <div className="alert alert-danger" role="alert">
  //       Plz enter valid data
  //     </div>
  //   );
  // }
  // else{
  //   alertMessage=""
  // }
  

  return (
    
      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg)</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(m):</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="Get BMI"
          />
        </form>
        {alert===true?<div className="alert alert-danger" role="alert">Plz enter valid data</div>:""}
      </div>
   
  );
};

export default Forms;

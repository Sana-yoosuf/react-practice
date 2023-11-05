import React from "react";

const BmiList = ({ range, bmi }) => {
  console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">WEIGHT</div>
          </div>
        </li>
        <li
          className={
            bmi < 18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Underweight</div>
            <div className="col-4">&lt; 18.5</div>
            <div className="col-4">&lt;{range.underWeight.low}</div>
          </div>
        </li>

        <li
          className={
            18.5 < bmi && bmi < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Normal</div>
            <div className="col-4"> 18.5-24.9</div>
            <div className="col-4">
              {range.normal.low + "kg - " + range.normal.high + "kg"}
            </div>
          </div>
        </li>

        <li
          className={
            24.9 < bmi && bmi < 29.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Overweight</div>
            <div className="col-4"> 25-29.9</div>
            <div className="col-4">
              {range.OverWeight.low + "kg - " + range.OverWeight.high + "kg"}
            </div>
          </div>
        </li>

        <li
          className={
            29.9 < bmi && bmi < 34.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class 1</div>
            <div className="col-4">30-34.9</div>
            <div className="col-4">
              {range.obesityOne.low + "kg - " + range.obesityOne.high + "kg"}
            </div>
          </div>
        </li>

        <li
          className={
            34.9 < bmi && bmi < 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class 2</div>
            <div className="col-4">35-39.9</div>
            <div className="col-4">
              {range.obesityTwo.low + "kg - " + range.obesityTwo.high + "kg"}
            </div>
          </div>
        </li>

        <li
          className={
            bmi > 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class 3</div>
            <div className="col-4">&gt;40</div>
            <div className="col-4">&gt; {range.obesityThree.high + "kg"}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BmiList;

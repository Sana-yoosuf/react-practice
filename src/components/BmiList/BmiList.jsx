import React from 'react'

const BmiList = () => {
  return (
    <div className='text-center shadow-sm rounded'>
      <ul className='list-group'>
        <li className='list-group-item'>
          <div className='row'>
            <div className='col-4 fw-bold'>Type</div> 
            <div className='col-4 fw-bold'>BMI</div> 
            <div className='col-4 fw-bold'>WEIGHT</div> 
          </div>
        </li>
        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Underweight</div>
            <div className="col-4">&lt; 18.5</div>
            <div className="col-4"></div>
          </div>
        </li>

        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Normal</div>
            <div className="col-4"> 18.5-24.9</div>
            <div className="col-4"></div>
          </div>
        </li>

        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Overweight</div>
            <div className="col-4"> 25-29.9</div>
            <div className="col-4"></div>
          </div>
        </li>

        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Obesity Class 1</div>
            <div className="col-4">30-34.9</div>
            <div className="col-4"></div>
          </div>
        </li>

        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Obesity Class 2</div>
            <div className="col-4">35-39.9</div>
            <div className="col-4"></div>
          </div>
        </li>

        <li className='list-group-item'>
          <div className='row'>
            <div className="col-4">Obesity Class 3</div>
            <div className="col-4">&gt;40</div>
            <div className="col-4"></div>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default BmiList
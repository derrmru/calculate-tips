import React, { useState } from 'react';
import calculateTips from './functions';
import Result from './Result'
import './App.css';

function App() {
  const [pool, setPool] = useState();
  const [entry, setEntry] = useState("");
  const [hours, setHours] = useState("");
  const [list, setList] = useState({});
  const [result, setResult] = useState();
  const [openClose, setOpenClose] = useState('close');
  const [render, setRender] = useState(true);

  const update = () => {
    let nList = list;
    nList[entry] = hours;
    setList(nList);
    setEntry("");
    setHours("");
  }

  const deleteEntry = (x) => {
    let dList = list;
    delete dList[x];
    setList(dList);
    setRender(!render);
  }

  const runCalculation = () => {
    setResult(calculateTips(pool, list));
    Object.keys(list).length > 0 && setOpenClose('open')
  }

  const reRender = () => {
    setOpenClose(!openClose)
  }

  return (
    <div className="App">

      <h1>Split My Tips</h1>

      <hr />

      <div className="tt-container">
        <h3 className="tt-description">What are your total tips?</h3>
        <input name="pool" type="number" value={pool} onChange={(e) => setPool(e.target.value)} placeholder="Total Tips" />
      </div>

      <hr />

      <div className="add-container">
        <input 
          className="add-employee" 
          name="employee-blank" 
          type="text" 
          value={entry} 
          onChange={(e) => setEntry(e.target.value)} 
          placeholder="Employee"
          />
        <input 
          className="add-hours"
          name="hours-blank" 
          type="number" 
          value={hours} 
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours"
          />
        <button
          className="add-button ripple" 
          type="submit" 
          onClick={(e) => entry !== "" && update(e)}
          >
            Add
          </button>
      </div>

      <hr />

      <div className='entered'>
        {
          Object.keys(list).map((x, i) => {
            return (
              <div key={("div" + i)} className='input-row'>
                <input key={('employee' + i)} className='input-employee' type="text" value={x} readOnly />
                <input key={('hours' + i)} className='input-hours' type="number" value={list[x]} readOnly />
                <button key={('delete' + i)} className='input-delete ripple' onClick={() => deleteEntry(x)}>Delete</button>
              </div>
            )
          })
        }
      </div>

        <button className="calculate-button ripple" onClick={() => runCalculation()}>Calculate Tips</button>

        <hr />

        {
          openClose === 'open' && <Result 
                      result={result}
                      reRender={reRender}
                      />
        }

    </div>
  );
}

export default App;
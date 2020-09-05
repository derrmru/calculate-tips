import React, { useState } from 'react';
import calculateTips from './functions/functions';
import Result from './components/Result'
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [pool, setPool] = useState<number | undefined>(undefined);
  const [entry, setEntry] = useState<string>("");
  const [hours, setHours] = useState<number | string | undefined>("");
  const [list, setList] = useState<{[index: string]: number | string | undefined}>({});
  const [result, setResult] = useState<{[index: string]: number | undefined}>({});
  const [openClose, setOpenClose] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(true);

  const update = () => {
    let nList = list;
    nList[entry] = hours;
    setList(nList);
    setEntry("");
    setHours("");
    setRender(!render)
  }

  const deleteEntry = (x: string) => {
    let dList = list;
    delete dList[x];
    setList(dList);
    setRender(!render);
  }

  const runCalculation = () => {
    const ct = calculateTips(pool, list);
    setResult(ct);
    Object.keys(list).length > 0 && setOpenClose(true)
  }

  const reRender = () => {
    setOpenClose(!openClose)
  }

  return (
    <div className="App">

      <h1>Split My Tips</h1>
      <p>How to split tips by hours</p>

      <hr />

      <div className="tt-container">
        <h2 className="tt-description">What are your total tips?</h2>
        <input name="pool" type="number" value={pool} onChange={(e) => setPool(Number(e.target.value))} placeholder="Total Tips" />
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
          onChange={(e) => setHours(Number(e.target.value))}
          placeholder="Hours"
          />
        <button
          className="add-button ripple" 
          type="submit" 
          onClick={() => entry !== "" && update()}
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
          openClose && <Result 
                      result={result}
                      reRender={reRender}
                      />
        }

        <Footer />

    </div>
  );
}

export default App;
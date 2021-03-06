import React, { useState } from 'react';
import calculateTips from '../functions/calculateTips';
import Menu from '../components/Menu/Menu';
import TotalTips from '../components/TotalTips/TotalTips';
import Entered from '../components/Entered/Entered';
import AddEntry from '../components/AddEntry';
import Result from '../components/Result/Result';
import Footer from '../components/Footer/Footer';
import InstallMessage from '../components/InstallMessage/InstallMessage';
import ReactGA from 'react-ga';
import '../App.css';

ReactGA.initialize('UA-177613300-1');

const App: React.FC = () => {
  ReactGA.pageview('/split-by-hours');
  const [pool, setPool] = useState<number | string>("");
  const [entry, setEntry] = useState<string>("");
  const [hours, setHours] = useState<number | string>("");
  const [list, setList] = useState<{[index: string]: number | string}>({});
  const [result, setResult] = useState<{[index: string]: number | undefined}>({});
  const [openClose, setOpenClose] = useState<boolean>(false);
  const [poolWarn, setPoolWarn] = useState<boolean>(false);
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
    (pool === 0 || pool === "") ? setPoolWarn(true) : setPoolWarn(false);
    const ct = calculateTips(pool, list);
    setResult(ct);
    Object.keys(list).length > 0 && setOpenClose(true)
  }

  const reRender = () => {
    setOpenClose(!openClose)
  }

  return (
    <div className="App">
      
      <Menu />

      <h1>Split Tips By Hours</h1>

      <hr />

      <TotalTips 
        pool={pool}
        poolWarn={poolWarn}
        setPool={setPool}
        />

      <hr />

      <AddEntry 
        entry={entry}
        setEntry={setEntry}
        hours={hours}
        setHours={setHours}
        update={update}
        />

      <hr />

      <Entered 
        list={list}
        deleteEntry={deleteEntry}
        />

      <button className="calculate-button ripple" onClick={() => runCalculation()}>Calculate Tips</button>

      <hr />

      {
        openClose && <Result 
                        result={result}
                        reRender={reRender}
                        />
      }

      <Footer />

      <InstallMessage />

    </div>
  );
}

export default App;
import React, { useState } from 'react';
import SwssResult from '../components/SwssResult/SwssResult';
import calculateComplexTips from '../functions/calculateComplexTips';
import './EnterStaff.css';

interface Props {
    pool: number | string;
    staffSplits: {[index: string]: number | string};
}

const EnterStaff: React.FC<Props> = (props) => {
    const pool = props.pool;
    const [employee, setEmployee] = useState<string>("");
    const [hours, setHours] = useState<number | string>("");
    const [catInc, setCatInc] = useState<number>(1);
    const [commit, setCommit] = useState<{[index: string]: {[index: string]: number | string}}>({});
    const [render, setRender] = useState<boolean>(false);
    const [result, setResult] = useState<{[index: string]: {[index: string]: number | string}}>({});
    const [showResult, setShowResult] = useState<boolean>(false);

    const catArr = Object.keys(props.staffSplits);

    const returnEntries = () => {
        let currentArr = [];
        for (let i = 0; i < catInc; i++){
            currentArr.push(catArr[i])
        }
        return currentArr
    }

    const commitEmployee = () => {
        let currentCat = catInc - 1;
        const tCommit = commit;
        tCommit[catArr[currentCat]] ? 
            tCommit[catArr[currentCat]][employee] = hours :
                tCommit[catArr[currentCat]] = {[employee]: hours};
        setCommit(tCommit);
        setHours("")
        setEmployee("")
        setRender(!render)  
    }

    const runCalculation = () => {
        if (
            pool !== 0 &&
            pool !== "" &&
            Number(commit[catArr[catArr.length]]) !== 0
        ) {
            let finalResult = calculateComplexTips(commit, pool, props.staffSplits);
            setResult(finalResult);
            setShowResult(true);
        }
    }

    const reRender = () => {
        setShowResult(!result)
    }

    return (
        <>
        <h2>Employee Hours Per Category</h2>

            {//return and visualise entered employees and their hours per category
                returnEntries().map((category, i) => {
                    return <div 
                        key={'category' + i}
                        className="category-container"
                        >
                                <h3 style={{textAlign: "left"}}>{category}</h3>
                                {
                                    commit[category] && Object.keys(commit[category]).map((employee, i) => {
                                        return  <div
                                                    className="employee-row" 
                                                    key={('employee' + i)}
                                                    >
                                                        <div className="the-employee">{employee}</div>
                                                        <div className="the-hours">{commit[category][employee]}</div>
                                                </div>
                                    })
                                }
                            </div>
                })
            }

            {catInc <= catArr.length && <div className="entry-point-container">
                <input 
                    className="employee"
                    type="text"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    placeholder="Employee"
                    />
                <input 
                    className="hours"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="Hours"
                    />
                <button
                    className="add-button ripple"
                    onClick={() => (hours !== 0 && employee !== "") && commitEmployee()}
                    >
                        Add
                </button>
                </div>
            }
        
        {//only show next button while there is a next category
            catInc < catArr.length && <button
                className="next-cat-button ripple"
                onClick={() => Object.keys(commit).length === catInc && setCatInc(catInc + 1)}
                >
                Next Category
            </button>
        }

        {//only show calculate button at last category
            catInc === catArr.length &&
            <button className="calculate-button ripple" onClick={() => runCalculation()}>Calculate Tips</button>
        }

        {showResult && <SwssResult 
            result={result}
            reRender={reRender}
            />
        }

        </>
    )
}

export default EnterStaff
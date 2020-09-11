import React, { useState } from 'react';
import Menu from '../components/Menu';
import StaffSplit from '../components/StaffSplit';
import TotalTips from '../components/TotalTips';
import EnterStaff from '../components/EnterStaff';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import "./SplitWithSupportStaff.css";

ReactGA.initialize('UA-177613300-1');

const SplitWithSupportStaff: React.FC = () => {
    ReactGA.pageview('/split-with-support-staff');

    const [stage, setStage] = useState<number>(1);
    const [staffSplits, setStaffSplits] = useState<{[index: string]: number | string}>({});
    const [pool, setPool] = useState<number | string>("");
    const [poolWarn, setPoolWarn] = useState<boolean>(false);
    const [catWarn, setCatWarn] = useState<boolean>(false);
    const [percWarn, setPercWarn] = useState<boolean>(false);
    const [render, setRender] = useState<boolean>(true);

    const ssKeys = Object.keys(staffSplits);

    const updateSplits = (x: string, y: number | string) => {
        if (x !== ""){
            let nStaff = staffSplits;
            nStaff[x] = Number(y);
            setStaffSplits(nStaff)
            setRender(!render)
        }
    }

    const deleteStaffItem = (a: string) => {
        let dStaff = staffSplits;
        delete dStaff[a];
        setRender(!render)
    }

    const increment = (b: number) => {//increment through the three stages or warn if page is unfinished
        let totalPercentage = 0; //find total Percentage
            for (let i = 0; i < ssKeys.length; i++) {
                totalPercentage += Number(staffSplits[ssKeys[i]]);
            }

        if (stage === 2 && (pool === "" || pool === 0)) {
            setPoolWarn(true)
        } else if (stage === 1 && ssKeys.length === 0) {
            setCatWarn(true) //if there are no categories warn user there must be at least 1
        } else if (stage === 1 && totalPercentage > 100) {
            setPercWarn(true) // if first stage total percentage is greater than 100, warn user
        } else if ((stage + b) >= 1 && (stage + b) <= 3) {
            setStage((stage + b))
        }
    }

    return (
        <div className="App">
            <Menu />
            
            <h1>Split Tips Amongst Staff</h1>

            {
                <div className="stage-indicator">
                    {[1, 2, 3].map((y, i) => {
                        return y <= stage ? 
                            <div key={('indicator' + i)} className="highlight"><strong>{y}</strong></div> : 
                                <div key={('indicator' + i)}>{y}</div>
                    })}
                </div>
            }
            <hr />

            {stage === 1 ?
                <>
                <StaffSplit 
                    updateSplits={updateSplits}
                    staffSplits={staffSplits}
                    />
                
                {catWarn && <div className="warn">There Must Be At Least One Staff Category</div>}
                {percWarn && <div className="warn">Your Staff Splits Are More Than 100%</div>}

                {ssKeys.length > 0 && <>
                    <h3>Your Categories</h3>
                    <div className="the-items">
                    {
                        ssKeys.map((a, i) => {
                            return <div 
                                key={('si' + i)}
                                className="staff-item"
                                >
                                    <div>{a}</div>
                                    <div
                                        style={{marginTop: "10px"}}>
                                            {staffSplits[a]}%
                                        </div>
                                    <button
                                        className="delete-staff-item ripple"
                                        onClick={() => deleteStaffItem(a)}
                                        >
                                            |x|
                                        </button>
                            </div>
                        })
                    }
                </div>
                </>}
                <hr />
                </>

                : stage === 2 ? 
                <>
                    <TotalTips 
                        pool={pool}
                        poolWarn={poolWarn}
                        setPool={setPool}
                        />

                    <hr />
                </>
                
                : stage === 3 && 
                <>
                    <EnterStaff 
                        pool={pool}
                        staffSplits={staffSplits}
                        />

                    <hr />
                </>
            }

            <Navigation 
                stage={stage}
                increment={increment}
                />

            <Footer />
        </div>
    )
}

export default SplitWithSupportStaff
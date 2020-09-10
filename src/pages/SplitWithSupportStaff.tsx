import React, { useState } from 'react';
import Menu from '../components/Menu';
import StaffSplit from '../components/StaffSplit';
import TotalTips from '../components/TotalTips';
import EnterStaff from '../components/EnterStaff';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "./SplitWithSupportStaff.css";

const SplitWithSupportStaff: React.FC = () => {
    const [stage, setStage] = useState<number>(1);
    const [staffSplits, setStaffSplits] = useState<{[index: string]: number | string}>({});
    const [pool, setPool] = useState<number | string>("");
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

    const increment = (b: number) => {
        ((stage + b) >= 1 && (stage + b) <= 3) && setStage((stage + b));
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
import React, {useState} from 'react';
import "./StaffSplit.css";

interface Props {
    updateSplits: (x: string, y: number | string) => void;
    staffSplits: {[index: string]: number | string};
}

const StaffSplits: React.FC<Props> = (props) => {
    const [staff, setStaff] = useState<string>("");
    const [split, setSplit] = useState<number | string>("");
    const [render, setRender] = useState<boolean>(true);

    const updateStaff = () => {
        props.updateSplits(staff, split)
        setStaff("");
        setSplit("");
        setRender(!render)

    }

    return (
        <div className="ss-container">
            <h2>Add Your Staff Categories</h2>
            <div className="ss-input">
                <label
                    className="ss-staff"
                    >
                    Staff Category <br />
                    <input 
                        type="text" 
                        onChange={(e) => setStaff(e.target.value)}
                        value={staff}
                        placeholder="e.g. Kitchen, Bar Staff etc."
                        />
                </label>
                <label
                    className="ss-split"
                    >
                    Percentage of Tips <br />
                    <input 
                        type="number" 
                        onChange={(e) => setSplit(e.target.value)}
                        value={split}
                        placeholder="e.g. 10%"
                        />
                </label>
                <button 
                    className="ss-add ripple"
                    onClick={() => updateStaff()}
                    >
                        Add
                </button>
            </div>
        </div>
    )
}

export default StaffSplits
import React from 'react'
import '../App.css'

interface Props {
    entry: string;
    hours: number | string;
    setEntry: (value: string) => void; 
    setHours: (value: number | string) => void;
    update: () => void;
}

const AddEntry: React.FC<Props> = (props) => {
    const entry = props.entry;
    const setEntry = props.setEntry;
    const setHours = props.setHours;
    const hours = props.hours;
    const update = props.update;

    return (
        <div className="add-container">
        <input 
          className="add-employee" 
          name="employee-blank" 
          type="text" 
          value={entry} 
          onChange={(e) => setEntry(e.target.value)!} 
          placeholder="Employee"
          aria-label="Employee Name"
          />
        <input 
          className="add-hours"
          name="hours-blank" 
          type="number" 
          value={hours} 
          onChange={(e) => setHours(Number(e.target.value))}
          placeholder="Hours"
          aria-label="Hours Employee Has Worked For the Period"
          />
        <button
          className="add-button ripple" 
          type="submit" 
          onClick={() => entry !== "" && update()}
          >
            Add
          </button>
      </div>
    )
}

export default AddEntry
import React from "react"
import '../App.css'

interface Props {
    list: {
        [index: string]: number | string | undefined
    };
    deleteEntry: (x: string) => void;
}

const Entered: React.FC<Props> = (props) => {
    const list = props.list;
    const deleteEntry = props.deleteEntry;

    return (
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
    )
}

export default Entered
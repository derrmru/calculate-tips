import React from 'react'

interface Props {
    pool: number | string;
    setPool: (value: number | string) => void
}

const TotalTips: React.FC<Props> = (props) => {
    const pool = props.pool;
    const setPool = props.setPool;

    return (
        <div className="tt-container">
            <h2 className="tt-description">What are your total tips?</h2>
            <input 
            name="pool" 
            type="number" 
            value={pool} 
            onChange={(e) => setPool(Number(e.target.value))} 
            placeholder="Total Tips" 
            aria-label="Input Total Tips"
            />
        </div>
    )
}

export default TotalTips
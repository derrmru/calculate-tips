import React from 'react'
import './TotalTips.css'

interface Props {
    pool: number | string;
    poolWarn: boolean;
    setPool: (value: number | string) => void
}

const TotalTips: React.FC<Props> = (props) => {
    const pool = props.pool;
    const setPool = props.setPool;

    return (
        <div className="tt-container">
            <h2 className="tt-description">What are your total tips?</h2>

            <div className="vertical-pool">
                {props.poolWarn && <div className="pool-warn">Please Input a Number Here</div>}
                <input 
                className="v-input"
                name="pool" 
                type="number" 
                value={pool} 
                onChange={(e) => setPool(Number(e.target.value))} 
                placeholder="Total Tips" 
                aria-label="Input Total Tips"
                />
            </div>
        </div>
    )
}

export default TotalTips
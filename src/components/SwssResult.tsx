import React from "react";
import "./SwssResult.css";

interface Props {
    result: {
        [index: string]: {
            [index: string]: number | string
        }
    };
    reRender: () => void
}

const SwssResult: React.FC<Props> = (props) => {
    const catArr = Object.keys(props.result);

    return (
        <div 
            className="result-container"
            onClick={() => props.reRender()}
            >
            <div 
                className='exit-button'
                >
                |X|
            </div>
            
            <h1>Your Splits</h1>
            {
                catArr.map((x) => {
                    return <>
                        <h2>{x}</h2>
                        {Object.keys(props.result[x]).map((y) => {
                            return <div className="cat-results-row">
                                <div className="y-name">{y}</div>
                                <div className="y-splits">{props.result[x][y]}</div>
                            </div>
                        })}
                    </>
                })
            }
            
        </div>
    )
}

export default SwssResult
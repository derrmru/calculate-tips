import React from "react"
import './Result.css'

interface Props {
    result: {
        [index: string]: number | undefined 
    };
    reRender: () => void;
}

const Result: React.FC<Props> = (props) => {
    const result = props.result;
    return (
        <div 
            className='result-container'
            onClick={() => props.reRender()}
            >
            <div 
                className='exit-button'
                >
                |X|
            </div>
            {
                Object.keys(result).map((x, i) => {
                    return (
                        <div 
                            key={'r' + i}
                            className='row-result'
                            >
                                <div className='e-result'>{x}</div>
                                <div className='h-result'>{result[x]}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Result
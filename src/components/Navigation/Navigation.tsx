import React from "react"
import "./Navigation.css"

interface Props {
    stage: number;
    increment: (b: number) => void;
}

const Navigation: React.FC<Props> = (props) => {
    return (
        <div className="nav-container">
            
            {(props.stage > 1 && props.stage <= 3) &&
                <button
                    className="backward-button"
                    onClick={() => props.increment(-1)}
                    >
                        <strong>Back</strong>
                    </button>
            }

            {(props.stage < 3 && props.stage >= 1) &&
                <button
                    style={{justifyContent: "flex-end"}}
                    className="next-button"
                    onClick={() => props.increment(1)}
                    >
                        <strong>Next</strong>
                    </button>
            }
        </div>
    )
}

export default Navigation
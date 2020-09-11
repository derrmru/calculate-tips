import React, { useState } from "react"
import './Menu.css'

const Menu: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <div className="menu">

            {
                toggle ? 
                    <div className="menu-items">
                        <button><a href="/split-with-support-staff">Split With Support Staff</a></button>
                        <button><a href="/split-by-hours">Split By Hours</a></button>
                        <button><a href="/about">About</a></button>
                    </div> :
                    <></>
            }

            <button
                className="menu-button"
                onClick={() => setToggle(!toggle)}
                >
                    {toggle ? <strong>|X|</strong> : <strong>Menu</strong>}
            </button>

        </div>
    )
}

export default Menu
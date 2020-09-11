import React, { useState, useEffect } from 'react';
import './InstallMessage.css'

const InstallMessage = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [openClose, setOpenClose] = useState<boolean>(true);

    useEffect(() => {
        // Detects if device is on iOS 
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        }
        // Detects if device is in standalone mode
        const theNavigator: any = window.navigator;
        const standAlone: any = theNavigator.standalone;
        const windowWidth: number = window.screen.width;
        const isInStandaloneMode = () => ('standalone' in theNavigator) && (standAlone);
        
        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode() && windowWidth < 600) {
            setShowMessage( true );
        }
    }, [])

    return (
        <>
            {showMessage && <div 
                                className="i-message-container" 
                                style={openClose ? {animationName: "slideout", width: "100%"} : {animationName: "slideIn", width: "0", opacity: 0}}
                                >
                                    <div
                                        className="i-message" 
                                        style={{textAlign: "right"}}
                                        >
                                        
                                        <div 
                                            className="the-message" 
                                            >
                                            {
                                                openClose &&
                                                    <p 
                                                        style={openClose ? 
                                                            {animationName: "fadeIn"} : 
                                                            {animationName: "fadeOut"}}
                                                        >
                                                        
                                                        <img
                                                            src={require('../images/iOS-ath.png')}
                                                            className="ath-button"
                                                            alt="Add to homepage icon"
                                                            />
                                                        
                                                        <div 
                                                            className="share-text"
                                                            >
                                                                Install this webapp on your iPhone: tap 
                                                                <br />and then 'Add to Home Screen'.
                                                        </div>

                                                        <img 
                                                            src={require('../images/iOS-share.png')} 
                                                            className="share-button"
                                                            alt="Share document icon"
                                                        />
                                                        
                                                    </p>
                                            }
                                        </div>
                                        
                                        <button 
                                            className="message-button"
                                            onClick={() => setOpenClose(!openClose)}
                                            >
                                                <p>|x|</p>
                                        </button>
                                    </div>
                            </div>}
        </>
    )
}

export default InstallMessage
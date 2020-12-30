import React from 'react';

const Overlay = ({color}) => {
    return(
        <div style={{
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.8,
            backgroundColor: color,
        }} />
    )
}

export default Overlay;
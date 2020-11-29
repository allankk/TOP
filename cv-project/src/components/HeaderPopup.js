import React from 'react';

class HeaderPopup extends React.Component {
    constructor(props) {
        super(props);


    
    
    }


    render() {
    return (
            <div className="popup">
                <label htmlFor="name">Name</label>
                <input autoComplete="off" type="text" id="name"/>

                <button>Submit</button>          
            
            
            </div>
    )
    }
}



export default HeaderPopup;